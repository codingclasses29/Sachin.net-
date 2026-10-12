import { NextResponse } from "next/server";
import { connectDB, isDBConfigured } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";

let memoryPartners = [
  {
    id: "SN-PTR-8812",
    partnerId: "SN-PTR-8812",
    fullName: "Sanjay Mishra",
    phone: "+91 99312 88120",
    email: "sanjay.csc@gmail.com",
    city: "Siwan",
    state: "Bihar",
    businessName: "Mishra Cyber Hub & CSC Seva",
    programId: "referral",
    programName: "Business Referral Partner",
    commissionRate: "20%",
    totalReferrals: 14,
    convertedClients: 9,
    totalEarned: "₹28,500",
    pendingPayout: "₹6,000",
    status: "Verified Partner",
    tier: "Gold Partner",
    joinedDate: "2026-06-15",
    upiId: "sanjaymishra@ybl",
  },
  {
    id: "SN-PTR-7429",
    partnerId: "SN-PTR-7429",
    fullName: "Aman Raj Gupta",
    phone: "+91 91223 74291",
    email: "aman.dev@outlook.com",
    city: "Patna",
    state: "Bihar",
    businessName: "NextWave Tech Solutions",
    programId: "developer",
    programName: "Freelance Developer Partner",
    commissionRate: "Subcontract 60%",
    totalReferrals: 8,
    convertedClients: 6,
    totalEarned: "₹45,000",
    pendingPayout: "₹12,500",
    status: "Verified Partner",
    tier: "Platinum Partner",
    joinedDate: "2026-07-20",
    upiId: "amanraj@okaxis",
  },
  {
    id: "SN-PTR-6304",
    partnerId: "SN-PTR-6304",
    fullName: "Praveen Tiwari",
    phone: "+91 98351 63042",
    email: "praveen.gopalganj@gmail.com",
    city: "Gopalganj",
    state: "Bihar",
    businessName: "Tiwari Computer Academy",
    programId: "franchise",
    programName: "District Franchise Partner",
    commissionRate: "25%",
    totalReferrals: 11,
    convertedClients: 7,
    totalEarned: "₹34,000",
    pendingPayout: "₹8,500",
    status: "Verified Partner",
    tier: "Silver Partner",
    joinedDate: "2026-08-01",
    upiId: "ptiwari@paytm",
  },
];

let memoryPartnerLeads = [
  {
    id: "PL-101",
    partnerId: "SN-PTR-8812",
    partnerName: "Sanjay Mishra",
    clientName: "Green Valley Public School",
    clientPhone: "+91 94301 22334",
    service: "School Management ERP (Custom Scope)",
    commissionAmount: "₹6,000 (20%)",
    status: "Won - Active Project",
    date: "2026-10-05",
  },
  {
    id: "PL-102",
    partnerId: "SN-PTR-8812",
    partnerName: "Sanjay Mishra",
    clientName: "Apex Diagnostic Centre",
    clientPhone: "+91 98355 66778",
    service: "Hospital & Clinic ERP (Custom Scope)",
    commissionAmount: "₹3,000 (20%)",
    status: "In Discussion",
    date: "2026-10-09",
  },
  {
    id: "PL-103",
    partnerId: "SN-PTR-7429",
    partnerName: "Aman Raj Gupta",
    clientName: "Patna SuperMart Online",
    clientPhone: "+91 91220 99887",
    service: "E-Commerce Website (Custom Scope)",
    commissionAmount: "₹5,000 (20%)",
    status: "Won - Active Project",
    date: "2026-10-03",
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const partnerId = searchParams.get("id");

  if (partnerId) {
    const partner = memoryPartners.find(
      (p) => p.partnerId.toLowerCase() === partnerId.toLowerCase()
    );
    const leads = memoryPartnerLeads.filter(
      (l) => l.partnerId.toLowerCase() === partnerId.toLowerCase()
    );
    return NextResponse.json({
      ok: true,
      partner: partner || memoryPartners[0],
      leads,
    });
  }

  return NextResponse.json({
    ok: true,
    partners: memoryPartners,
    leads: memoryPartnerLeads,
    totalPartners: memoryPartners.length,
    totalCommissionDisbursed: "₹1,07,500",
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      email,
      city,
      state,
      businessName,
      programId,
      experience,
      upiId,
      expectedMonthlyClients,
    } = body;

    if (!fullName || !phone) {
      return NextResponse.json(
        { ok: false, error: "Full Name and WhatsApp Phone are required." },
        { status: 400 }
      );
    }

    const uniqueNum = Math.floor(1000 + Math.random() * 9000);
    const partnerId = `SN-PTR-${uniqueNum}`;

    const newPartner = {
      id: partnerId,
      partnerId,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: (email || "").trim(),
      city: city || "Siwan",
      state: state || "Bihar",
      businessName: (businessName || "").trim() || "Independent Associate",
      programId: programId || "referral",
      programName:
        programId === "developer"
          ? "Freelance Developer Partner"
          : programId === "franchise"
          ? "District Franchise Partner"
          : "Business Referral Partner",
      commissionRate: programId === "franchise" ? "25%" : programId === "developer" ? "60%" : "20%",
      totalReferrals: 0,
      convertedClients: 0,
      totalEarned: "₹0",
      pendingPayout: "₹0",
      status: "Verified Partner",
      tier: "Silver Partner",
      joinedDate: new Date().toISOString().split("T")[0],
      upiId: (upiId || "").trim() || "Pending Setup",
      experience: experience || "New Partner",
      expectedMonthlyClients: expectedMonthlyClients || "1-3 clients",
    };

    memoryPartners.unshift(newPartner);

    if (isDBConfigured()) {
      try {
        await connectDB();
        await Lead.create({
          name: fullName,
          phone,
          email: email || "partner@sachin-net.xyz",
          service: `Partner Registration: ${newPartner.programName}`,
          budget: `Partner ID: ${partnerId}`,
          message: `Location: ${city}, ${state} | Business: ${businessName || "None"} | UPI: ${upiId || "None"}`,
          status: "partner",
        });
      } catch (err) {
        console.warn("DB partner logging skipped:", err?.message);
      }
    }

    return NextResponse.json({
      ok: true,
      partner: newPartner,
      message: `Partner registered successfully! Welcome ${fullName}. Your Partner ID is ${partnerId}.`,
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err.message || "Failed to register partner." },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { action, partnerId, clientName, clientPhone, service, budget } = body;

    if (action === "submit-lead") {
      const newLead = {
        id: `PL-${Math.floor(100 + Math.random() * 900)}`,
        partnerId: partnerId || "SN-PTR-8812",
        partnerName: body.partnerName || "Partner",
        clientName,
        clientPhone,
        service: `${service} (${budget || "Quote"})`,
        commissionAmount: "Estimated 15-20%",
        status: "Lead Received - Team Review",
        date: new Date().toISOString().split("T")[0],
      };
      memoryPartnerLeads.unshift(newLead);
      return NextResponse.json({
        ok: true,
        lead: newLead,
        message: "Client lead submitted! Our team is contacting the client now.",
      });
    }

    if (action === "request-payout") {
      return NextResponse.json({
        ok: true,
        message: `Payout request of ${body.amount || "pending amount"} submitted! Founder Sachin Kushwaha will disburse via UPI ${body.upiId || "account"} within 24 hours.`,
      });
    }

    return NextResponse.json({ ok: false, error: "Invalid action." }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

