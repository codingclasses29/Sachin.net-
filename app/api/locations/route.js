import { NextResponse } from "next/server";
import { serviceLocations } from "@/lib/data";

let memoryLocations = [...serviceLocations];

export async function GET() {
  return NextResponse.json({
    ok: true,
    locations: memoryLocations,
    totalHubs: memoryLocations.length,
    activeDistricts: memoryLocations.filter((l) => l.status === "Active").length,
    totalAssignedPartners: memoryLocations.reduce((sum, l) => sum + (l.partnersCount || 0), 0),
    totalLocalClients: memoryLocations.reduce((sum, l) => sum + (l.activeClients || 0), 0),
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, district, state, type, address, deliverySpeed, phone, description } = body;

    if (!name || !district) {
      return NextResponse.json(
        { ok: false, error: "Location Name and District are required." },
        { status: 400 }
      );
    }

    const newHub = {
      id: district.toLowerCase().replace(/\s+/g, "-"),
      name,
      district,
      state: state || "Bihar",
      type: type || "Regional Service Center",
      badge: `${district} Hub`,
      address: address || `${district}, ${state || "Bihar"}`,
      activeClients: 1,
      partnersCount: 1,
      deliverySpeed: deliverySpeed || "48-72 Hours",
      phone: phone || "+91 9931306292",
      status: "Active",
      popularServices: ["Business Websites", "School ERP", "Digital Services"],
      description: description || `Dedicated Sachin.net local technology hub in ${district}.`,
    };

    memoryLocations.push(newHub);

    return NextResponse.json({
      ok: true,
      location: newHub,
      message: `New location hub '${name}' successfully configured and activated!`,
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err.message || "Failed to add location hub." },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  try {
    const { id, status, partnersCount, activeClients } = await request.json();
    const idx = memoryLocations.findIndex((l) => l.id === id);
    if (idx !== -1) {
      if (status) memoryLocations[idx].status = status;
      if (typeof partnersCount === "number") memoryLocations[idx].partnersCount = partnersCount;
      if (typeof activeClients === "number") memoryLocations[idx].activeClients = activeClients;
      return NextResponse.json({ ok: true, location: memoryLocations[idx] });
    }
    return NextResponse.json({ ok: false, error: "Location not found" }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

