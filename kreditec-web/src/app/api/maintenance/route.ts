import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Archivo de estado persistente en el servidor
const STATE_FILE = path.join(process.cwd(), 'maintenance.json');

function readState(): boolean {
  try {
    if (fs.existsSync(STATE_FILE)) {
      const data = JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
      return data.maintenance === true;
    }
  } catch {}
  return false;
}

function writeState(value: boolean) {
  fs.writeFileSync(STATE_FILE, JSON.stringify({ maintenance: value }), 'utf-8');
}

// GET /api/maintenance → devuelve el estado actual
export async function GET() {
  const maintenance = readState();
  return NextResponse.json({ maintenance }, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    }
  });
}

// POST /api/maintenance → cambia el estado
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { maintenance, password } = body;

    // Validación de contraseña en el servidor
    if (password !== 'Open+2025*') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    writeState(!!maintenance);
    return NextResponse.json({ maintenance: !!maintenance });
  } catch {
    return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 400 });
  }
}
