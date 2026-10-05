import jsPDF from 'jspdf';

export interface SolicitudPdfData {
  folio?: string;
  fechaEmision?: string;
  nombres?: string;
  apellidos?: string;
  cedula?: string;
  fechaNacimiento?: string;
  email?: string;
  telefono?: string;
  ingresosMensuales?: string;
  situacionLaboral?: string;
  situacionLaboralOtro?: string;
  tiempoEmpleo?: string;
  tipoCredito?: string;
  ruc?: string;
  montoCredito?: string;
  ciudad?: string;
  domicilio?: string;
  autorizacionLopdp?: boolean;
  firmaDigitalUrl?: string; // base64 PNG
}

export function generateSolicitudPdf(data?: SolicitudPdfData): void {
  const isBlank = !data || !data.cedula;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;

  let y = margin;

  // ── CABECERA CORPORATIVA KREDITEC ──
  doc.setFillColor(0, 45, 20); // #002d14
  doc.rect(margin, y, contentWidth, 22, 'F');

  // Línea de acento verde Kreditec
  doc.setFillColor(0, 188, 76); // #00bc4c
  doc.rect(margin, y + 21, contentWidth, 1.2, 'F');

  // Textos Cabecera
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('KREDITEC', margin + 5, y + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(200, 230, 210);
  doc.text('KREDITECONK S.A.S. - RUC: 1793214856001', margin + 5, y + 13);
  doc.text('FORMULARIO DE SOLICITUD Y CAPTACIÓN DE DATOS', margin + 5, y + 18);

  // Metadata lateral derecha (Folio y Fecha)
  const folioText = isBlank ? 'FORMATO EN BLANCO' : `FOLIO: ${data?.folio || 'KRD-2026-001'}`;
  const now = new Date();
  const fechaStr = isBlank
    ? 'FECHA: ___ / ___ / ______'
    : `FECHA: ${data?.fechaEmision || now.toLocaleDateString('es-EC') + ' ' + now.toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit' })}`;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text(folioText, pageWidth - margin - 5, y + 9, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(200, 230, 210);
  doc.text(fechaStr, pageWidth - margin - 5, y + 15, { align: 'right' });

  y += 28;

  // Función auxiliar para dibujar títulos de bloques
  const drawSectionHeader = (title: string) => {
    doc.setFillColor(232, 245, 237); // #e8f5ed
    doc.rect(margin, y, contentWidth, 6.5, 'F');
    doc.setFillColor(0, 188, 76);
    doc.rect(margin, y, 3, 6.5, 'F');

    doc.setTextColor(0, 45, 20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(title, margin + 6, y + 4.7);
    y += 9.5;
  };

  // Función auxiliar para dibujar fila de campos clave-valor
  const drawFieldRow = (
    label1: string,
    val1: string,
    label2?: string,
    val2?: string,
    rowHeight = 8.5
  ) => {
    const colWidth = label2 ? (contentWidth - 4) / 2 : contentWidth;

    // Columna 1
    doc.setFillColor(248, 250, 249);
    doc.rect(margin, y, colWidth, rowHeight, 'F');
    doc.setDrawColor(226, 232, 229);
    doc.rect(margin, y, colWidth, rowHeight, 'D');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(label1.toUpperCase(), margin + 2.5, y + 3.2);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(isBlank ? '________________________________' : (val1 || 'No especificado'), margin + 2.5, y + 6.8);

    // Columna 2 (si existe)
    if (label2) {
      const col2X = margin + colWidth + 4;
      doc.setFillColor(248, 250, 249);
      doc.rect(col2X, y, colWidth, rowHeight, 'F');
      doc.rect(col2X, y, colWidth, rowHeight, 'D');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7);
      doc.setTextColor(100, 116, 139);
      doc.text(label2.toUpperCase(), col2X + 2.5, y + 3.2);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text(isBlank ? '________________________________' : (val2 || 'No especificado'), col2X + 2.5, y + 6.8);
    }

    y += rowHeight + 2;
  };

  // ── 1. DATOS DE IDENTIFICACIÓN ──
  drawSectionHeader('1. DATOS DE IDENTIFICACIÓN');
  drawFieldRow('Nombres', data?.nombres || '', 'Apellidos', data?.apellidos || '');
  drawFieldRow(
    'Cédula de Identidad (10 dígitos)',
    data?.cedula || '',
    'Fecha de Nacimiento',
    data?.fechaNacimiento || ''
  );
  y += 2;

  // ── 2. DATOS DE CONTACTO ──
  drawSectionHeader('2. DATOS DE CONTACTO');
  drawFieldRow(
    'Número de Celular / WhatsApp',
    data?.telefono || '',
    'Correo Electrónico',
    data?.email || ''
  );
  y += 2;

  // ── 3. INFORMACIÓN ECONÓMICA ──
  drawSectionHeader('3. INFORMACIÓN ECONÓMICA');
  const situacionTexto =
    data?.situacionLaboral === 'Otro' && data?.situacionLaboralOtro
      ? `Otro: ${data.situacionLaboralOtro}`
      : data?.situacionLaboral || '';

  drawFieldRow(
    'Monto de Ingresos Mensuales ($)',
    data?.ingresosMensuales || '',
    'Situación Laboral',
    situacionTexto
  );

  const tiempoEmpleoVal = data?.situacionLaboral === 'Dependiente' ? data?.tiempoEmpleo || '' : 'N/A';
  const rucVal = data?.tipoCredito === 'Microcrédito' ? data?.ruc || '' : 'N/A';

  drawFieldRow(
    'Tiempo en Empleo Actual',
    tiempoEmpleoVal,
    'Tipo de Crédito Requerido',
    data?.tipoCredito || ''
  );

  drawFieldRow(
    'RUC del Negocio (Microcrédito)',
    rucVal,
    'Monto Solicitado ($ USD)',
    data?.montoCredito ? `$${data.montoCredito} USD` : ''
  );
  y += 2;

  // ── 4. DIRECCIÓN DE DOMICILIO ──
  drawSectionHeader('4. DIRECCIÓN DE DOMICILIO');
  drawFieldRow(
    'Ciudad de Residencia',
    data?.ciudad || '',
    'Dirección Domiciliaria / Referencia',
    data?.domicilio || ''
  );
  y += 2;

  // ── 5. AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS (LOPDP) ──
  drawSectionHeader('5. AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS (LOPDP)');

  // Caja de texto legal LOPDP
  const legalBoxHeight = 22;
  doc.setFillColor(244, 250, 246);
  doc.rect(margin, y, contentWidth, legalBoxHeight, 'F');
  doc.setDrawColor(0, 188, 76);
  doc.rect(margin, y, contentWidth, legalBoxHeight, 'D');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(30, 41, 59);

  const legalText =
    'Autorizo a KREDITECONK S.A.S. (KREDITEC) a tratar mis datos personales (incluyendo ingresos e información laboral) ' +
    'y a comunicarlos/transferirlos a instituciones financieras aliadas con la finalidad de evaluar, tramitar y presentar mi ' +
    'solicitud de crédito, así como a contactarme por teléfono, WhatsApp o correo electrónico. Conozco que puedo ejercer mis ' +
    'derechos conforme a la LOPDP.';

  const splitLegal = doc.splitTextToSize(legalText, contentWidth - 6);
  doc.text(splitLegal, margin + 3, y + 4.5);

  const estadoLopdp = isBlank
    ? '[   ] Acepto y Autorizo expresamente'
    : '[ X ] ACEPTADO DIGITALMENTE POR EL TITULAR (Conforme a la LOPDP)';
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(0, 140, 56);
  doc.text(estadoLopdp, margin + 3, y + 18.5);

  y += legalBoxHeight + 5;

  // ── ÁREA DE FIRMA Y FECHA (PIE DE PÁGINA DOCUMENTAL) ──
  const sigBoxWidth = (contentWidth - 6) / 2;
  const sigBoxHeight = 30;

  // Caja 1: Firma del Solicitante
  doc.setFillColor(255, 255, 255);
  doc.rect(margin, y, sigBoxWidth, sigBoxHeight, 'F');
  doc.setDrawColor(200, 210, 205);
  doc.rect(margin, y, sigBoxWidth, sigBoxHeight, 'D');

  if (data?.firmaDigitalUrl && !isBlank) {
    try {
      doc.addImage(data.firmaDigitalUrl, 'PNG', margin + 8, y + 2, sigBoxWidth - 16, 18);
    } catch {
      // Si falla la imagen, línea estándar
      doc.setDrawColor(100, 116, 139);
      doc.line(margin + 10, y + 20, margin + sigBoxWidth - 10, y + 20);
    }
  } else {
    doc.setDrawColor(100, 116, 139);
    doc.line(margin + 10, y + 20, margin + sigBoxWidth - 10, y + 20);
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);
  doc.text('Firma del Solicitante', margin + sigBoxWidth / 2, y + 25.5, { align: 'center' });

  // Caja 2: Fecha y Constancia de Registro
  const box2X = margin + sigBoxWidth + 6;
  doc.setFillColor(255, 255, 255);
  doc.rect(box2X, y, sigBoxWidth, sigBoxHeight, 'F');
  doc.setDrawColor(200, 210, 205);
  doc.rect(box2X, y, sigBoxWidth, sigBoxHeight, 'D');

  doc.setDrawColor(100, 116, 139);
  doc.line(box2X + 10, y + 20, box2X + sigBoxWidth - 10, y + 20);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);
  doc.text('Fecha (DD/MM/AAAA)', box2X + sigBoxWidth / 2, y + 25.5, { align: 'center' });

  if (!isBlank) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(0, 140, 56);
    doc.text('Aceptación y Registro Electrónico Verificado', box2X + sigBoxWidth / 2, y + 10, { align: 'center' });
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(7);
    doc.text(now.toLocaleDateString('es-EC') + ' ' + now.toLocaleTimeString('es-EC'), box2X + sigBoxWidth / 2, y + 15, {
      align: 'center',
    });
  }

  y += sigBoxHeight + 6;

  // ── FOOTER INSTITUCIONAL CONFIDENCIAL ──
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(6.5);
  doc.setTextColor(120, 130, 125);
  doc.text(
    'KREDITECONK S.A.S. - Formulario de Captación Omnicanal v1.0 | Uso Confidencial | Edificio ZYRA Of. 605, Quito - Ecuador',
    pageWidth / 2,
    pageHeight - 8,
    { align: 'center' }
  );

  // Descarga inmediata en el navegador del cliente
  const filename = isBlank
    ? 'Kreditec_Planilla_Solicitud_En_Blanco.pdf'
    : `Kreditec_Solicitud_Credito_${data?.cedula || 'Registrada'}.pdf`;

  doc.save(filename);
}
