import { NextResponse } from "next/server";
import { connectDB, isDBConfigured } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";

// In-memory fallback cache for serverless runtime
let memoryBookings = [
  {
    id: "SN-BK-9021",
    bookingId: "SN-BK-9021",
    customerName: "Dr. Arvind Pathak",
    customerPhone: "+91 98765 43210",
    customerEmail: "dr.arvind@medcare.org",
    businessName: "MedCare Hospital & Research Centre",
    serviceTitle: "Hospital & Clinic ERP",
    packageName: "Complete Hospital ERP",
    packagePrice: "₹29,999",
    location: "Siwan",
    state: "Bihar",
    deliveryTime: "10-15 Days",
    status: "Live & Deployed",
    milestone: "5/5 Deployed",
    currentStep: 5,
    advancePaid: "₹15,000",
    totalAmount: "₹29,999",
    createdAt: "2026-10-02T10:30:00.000Z",
    demoUrl: "https://medicarehospitl.netlify.app/",
    notes: "Online OPD, patient records, emergency helpline live on custom domain.",
  },
  {
    id: "SN-BK-8842",
    bookingId: "SN-BK-8842",
    customerName: "Rameshwar Singh",
    customerPhone: "+91 94312 88421",
    customerEmail: "contact@gramvikas.org",
    businessName: "Gram Vikas Foundation (Trust)",
    serviceTitle: "NGO & Trust Management",
    packageName: "NGO Digital Package (All-in-One)",
    packagePrice: "₹6,999",
    location: "Patna",
    state: "Bihar",
    deliveryTime: "3-4 Days",
    status: "Live & Deployed",
    milestone: "5/5 Deployed",
    currentStep: 5,
    advancePaid: "₹6,999",
    totalAmount: "₹6,999",
    createdAt: "2026-10-04T14:15:00.000Z",
    demoUrl: "https://gramvikasfoundation.netlify.app/",
    notes: "Member ID cards, 80G tax receipt generator and UPI gateway active.",
  },
  {
    id: "SN-BK-7319",
    bookingId: "SN-BK-7319",
    customerName: "Vikramaditya Sahay",
    customerPhone: "+91 98350 73190",
    customerEmail: "principal@edusmart.edu.in",
    businessName: "EduSmart Model School",
    serviceTitle: "School Management ERP",
    packageName: "Smart School Standard",
    packagePrice: "₹19,999",
    location: "Gopalganj",
    state: "Bihar",
    deliveryTime: "5-7 Days",
    status: "In Development",
    milestone: "3/5 Coding & Database",
    currentStep: 3,
    advancePaid: "₹10,000",
    totalAmount: "₹19,999",
    createdAt: "2026-10-08T09:00:00.000Z",
    demoUrl: "#",
    notes: "Student fee module completed; online marksheet module in progress.",
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const queryPhone = searchParams.get("phone");
  const queryId = searchParams.get("id");

  let filtered = [...memoryBookings];

  if (queryPhone) {
    const cleanPhone = queryPhone.replace(/\D/g, "");
    filtered = filtered.filter((b) => b.customerPhone.replace(/\D/g, "").includes(cleanPhone));
  }

  if (queryId) {
    filtered = filtered.filter((b) => b.bookingId.toLowerCase() === queryId.toLowerCase());
  }

  return NextResponse.json({
    ok: true,
    bookings: filtered,
    total: filtered.length,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      customerName,
      customerPhone,
      customerEmail,
      businessName,
      serviceTitle,
      packageName,
      packagePrice,
      location,
      deliveryTime,
      requirements,
      needPaymentGateway,
      needAdminPanel,
      needDomainSSL,
      needSEO,
    } = body;

    if (!customerName || !customerPhone || !serviceTitle) {
      return NextResponse.json(
        { ok: false, error: "Name, phone number and service are required." },
        { status: 400 }
      );
    }

    const uniqueNum = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `SN-BK-${uniqueNum}`;

    const newBooking = {
      id: bookingId,
      bookingId,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerEmail: (customerEmail || "").trim(),
      businessName: (businessName || "").trim() || "Independent Project",
      serviceTitle,
      packageName: packageName || "Custom Setup",
      packagePrice: packagePrice || "Custom Quote",
      location: location || "Siwan (Bihar)",
      state: "Bihar",
      deliveryTime: deliveryTime || "48-72 Hours",
      status: "Requirements Discussed",
      milestone: "1/5 Requirement Review",
      currentStep: 1,
      advancePaid: "Pending",
      totalAmount: packagePrice || "Custom",
      createdAt: new Date().toISOString(),
      notes: requirements || "New service booking from website customer portal.",
      featuresChecked: {
        paymentGateway: Boolean(needPaymentGateway),
        adminPanel: Boolean(needAdminPanel),
        domainSSL: Boolean(needDomainSSL),
        seo: Boolean(needSEO),
      },
    };

    memoryBookings.unshift(newBooking);

    // Save as lead in DB if configured
    if (isDBConfigured()) {
      try {
        await connectDB();
        await Lead.create({
          name: customerName,
          phone: customerPhone,
          email: customerEmail || "booking@sachin-net.xyz",
          service: `${serviceTitle} (${packageName || "Custom"})`,
          budget: packagePrice || "Custom",
          message: `Booking ID: ${bookingId} | Location: ${location} | Reqs: ${requirements || "None"}`,
          status: "new",
        });
      } catch (dbErr) {
        console.warn("DB lead creation skipped in demo:", dbErr?.message);
      }
    }

    return NextResponse.json({
      ok: true,
      booking: newBooking,
      message: "Booking submitted successfully! Our founder Sachin Kushwaha will contact you within 2 hours.",
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err.message || "Failed to process booking." },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  try {
    const { bookingId, status, currentStep, notes } = await request.json();
    const idx = memoryBookings.findIndex((b) => b.bookingId === bookingId);
    if (idx !== -1) {
      if (status) memoryBookings[idx].status = status;
      if (currentStep) memoryBookings[idx].currentStep = currentStep;
      if (notes) memoryBookings[idx].notes = notes;
      return NextResponse.json({ ok: true, booking: memoryBookings[idx] });
    }
    return NextResponse.json({ ok: false, error: "Booking not found" }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

