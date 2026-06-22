import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "sachin-net-dev-secret-change-in-production";

export function signToken(payload, expiresIn = "7d") {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export function getTokenFromRequest(request) {
  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7);
  const cookie = request.headers.get("cookie") || "";
  const match = cookie.match(/admin_token=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

export async function requireAdmin(request) {
  const token = getTokenFromRequest(request);
  if (!token) return null;
  const decoded = verifyToken(token);
  if (!decoded?.id || decoded.role !== "admin") return null;
  return decoded;
}
