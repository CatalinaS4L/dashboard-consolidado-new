// ======================================================
// 1. ENLACES DIRECTOS A GOOGLE SHEETS NEW CONSOLIDADO
// ======================================================

const COUNTRY_MONTH_URLS = {
  "Perú": {
    febrero: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSqTQitnK8fqCABAnYc68gmx3RQM2e6qmnlNcxryZ_amvWo9gJLlOEVb82mxylpQZz9uROVe9l81OmF/pub?gid=0&single=true&output=csv`,
    marzo: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSqTQitnK8fqCABAnYc68gmx3RQM2e6qmnlNcxryZ_amvWo9gJLlOEVb82mxylpQZz9uROVe9l81OmF/pub?gid=397555912&single=true&output=csv`,
    abril: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSqTQitnK8fqCABAnYc68gmx3RQM2e6qmnlNcxryZ_amvWo9gJLlOEVb82mxylpQZz9uROVe9l81OmF/pub?gid=1499336465&single=true&output=csv`,
    mayo: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSqTQitnK8fqCABAnYc68gmx3RQM2e6qmnlNcxryZ_amvWo9gJLlOEVb82mxylpQZz9uROVe9l81OmF/pub?gid=289433826&single=true&output=csv`,
    junio: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSqTQitnK8fqCABAnYc68gmx3RQM2e6qmnlNcxryZ_amvWo9gJLlOEVb82mxylpQZz9uROVe9l81OmF/pub?gid=632786864&single=true&output=csv`,
    julio: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSqTQitnK8fqCABAnYc68gmx3RQM2e6qmnlNcxryZ_amvWo9gJLlOEVb82mxylpQZz9uROVe9l81OmF/pub?gid=264290748&single=true&output=csv`,
    agosto: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSqTQitnK8fqCABAnYc68gmx3RQM2e6qmnlNcxryZ_amvWo9gJLlOEVb82mxylpQZz9uROVe9l81OmF/pub?gid=1822972942&single=true&output=csv`,
    septiembre: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSqTQitnK8fqCABAnYc68gmx3RQM2e6qmnlNcxryZ_amvWo9gJLlOEVb82mxylpQZz9uROVe9l81OmF/pub?gid=1684652595&single=true&output=csv`
  },
  "Ecuador": {
    febrero: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQSOQez8QahZZaVSPTXSTJZSNi8DC3mGSEL4AAdlzIpj169XVFi_AuVpUJ5uQJpmZ4weWLyAPzazh/pub?gid=0&single=true&output=csv`,
    marzo: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQSOQez8QahZZaVSPTXSTJZSNi8DC3mGSEL4AAdlzIpj169XVFi_AuVpUJ5uQJpmZ4weWLyAPzazh/pub?gid=972956934&single=true&output=csv`,
    abril: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQSOQez8QahZZaVSPTXSTJZSNi8DC3mGSEL4AAdlzIpj169XVFi_AuVpUJ5uQJpmZ4weWLyAPzazh/pub?gid=1186598423&single=true&output=csv`,
    mayo: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQSOQez8QahZZaVSPTXSTJZSNi8DC3mGSEL4AAdlzIpj169XVFi_AuVpUJ5uQJpmZ4weWLyAPzazh/pub?gid=931773328&single=true&output=csv`,
    junio: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQSOQez8QahZZaVSPTXSTJZSNi8DC3mGSEL4AAdlzIpj169XVFi_AuVpUJ5uQJpmZ4weWLyAPzazh/pub?gid=1230562695&single=true&output=csv`,
    julio: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQSOQez8QahZZaVSPTXSTJZSNi8DC3mGSEL4AAdlzIpj169XVFi_AuVpUJ5uQJpmZ4weWLyAPzazh/pub?gid=1034655502&single=true&output=csv`,
    agosto: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQSOQez8QahZZaVSPTXSTJZSNi8DC3mGSEL4AAdlzIpj169XVFi_AuVpUJ5uQJpmZ4weWLyAPzazh/pub?gid=833072153&single=true&output=csv`,
    septiembre: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQSOQez8QahZZaVSPTXSTJZSNi8DC3mGSEL4AAdlzIpj169XVFi_AuVpUJ5uQJpmZ4weWLyAPzazh/pub?gid=1748535358&single=true&output=csv`
  },
  "República Dominicana": {
    marzo: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSlK47Jfhz-MrQlFc-dZEH7NMOR61KdSLDfC83scipF55FrLuHC2WutieEgEICJlmVS-RYgpLbDuv_u/pub?gid=0&single=true&output=csv`,
    abril: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSlK47Jfhz-MrQlFc-dZEH7NMOR61KdSLDfC83scipF55FrLuHC2WutieEgEICJlmVS-RYgpLbDuv_u/pub?gid=447454925&single=true&output=csv`,
    mayo: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSlK47Jfhz-MrQlFc-dZEH7NMOR61KdSLDfC83scipF55FrLuHC2WutieEgEICJlmVS-RYgpLbDuv_u/pub?gid=280822937&single=true&output=csv`,
    junio: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSlK47Jfhz-MrQlFc-dZEH7NMOR61KdSLDfC83scipF55FrLuHC2WutieEgEICJlmVS-RYgpLbDuv_u/pub?gid=1135519142&single=true&output=csv`,
    julio: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSlK47Jfhz-MrQlFc-dZEH7NMOR61KdSLDfC83scipF55FrLuHC2WutieEgEICJlmVS-RYgpLbDuv_u/pub?gid=1312077769&single=true&output=csv`,
    agosto: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSlK47Jfhz-MrQlFc-dZEH7NMOR61KdSLDfC83scipF55FrLuHC2WutieEgEICJlmVS-RYgpLbDuv_u/pub?gid=1976446318&single=true&output=csv`,
    septiembre: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSlK47Jfhz-MrQlFc-dZEH7NMOR61KdSLDfC83scipF55FrLuHC2WutieEgEICJlmVS-RYgpLbDuv_u/pub?gid=1708978309&single=true&output=csv`
  },
  "Colombia": {
    abril: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSbwofts2AnxV2NWl1ThcGXsXBfnqVPElRlsh_8l8ZcD6aXX2W0spxisqC1HJBFQuUVIF9nbdfAXfe6/pub?gid=1320009300&single=true&output=csv`,
    mayo: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSbwofts2AnxV2NWl1ThcGXsXBfnqVPElRlsh_8l8ZcD6aXX2W0spxisqC1HJBFQuUVIF9nbdfAXfe6/pub?gid=297274494&single=true&output=csv`,
    junio: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSbwofts2AnxV2NWl1ThcGXsXBfnqVPElRlsh_8l8ZcD6aXX2W0spxisqC1HJBFQuUVIF9nbdfAXfe6/pub?gid=1132662885&single=true&output=csv`,
    julio: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSbwofts2AnxV2NWl1ThcGXsXBfnqVPElRlsh_8l8ZcD6aXX2W0spxisqC1HJBFQuUVIF9nbdfAXfe6/pub?gid=1916159240&single=true&output=csv`,
    agosto: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSbwofts2AnxV2NWl1ThcGXsXBfnqVPElRlsh_8l8ZcD6aXX2W0spxisqC1HJBFQuUVIF9nbdfAXfe6/pub?gid=1888744861&single=true&output=csv`,
    septiembre: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSbwofts2AnxV2NWl1ThcGXsXBfnqVPElRlsh_8l8ZcD6aXX2W0spxisqC1HJBFQuUVIF9nbdfAXfe6/pub?gid=230570935&single=true&output=csv`
  }
};

const COUNTRY_COLORS = {
  "Perú": "#2563eb",
  "Ecuador": "#10b981",
  "República Dominicana": "#f59e0b",
  "Colombia": "#8b5cf6"
};

let selectedCountry = 'todos';
let allMonthsData = {};
let rawData = [];
let filteredData = [];
let scatterChartInstance = null;

let sortState = {
  'country-table': { column: 'cumplimientoPct', isAsc: false },
  'country-diagnostic-table': { column: 'notaFinal', isAsc: false }
};

// ======================================================
// 2. UTILIDADES Y AUXILIARES
// ======================================================

function getRowValue(row, keyName) {
  if (!row) return '';
  const targetKey = keyName.trim().toUpperCase();
  const actualKey = Object.keys(row).find(k => {
    if (!k) return false;
    const cleanKey = k.replace(/[\r\n]/g, '').trim().toUpperCase();
    return cleanKey === targetKey || cleanKey.startsWith(targetKey);
  });
  return actualKey ? row[actualKey].toString().trim() : '';
}

function parseNum(val) {
  if (!val) return 0;
  let num = parseFloat(val.toString().replace('%', '').replace(',', '.'));
  return isNaN(num) ? 0 : num;
}

function getActiveMonthKeys() {
  const monthsSet = new Set();
  Object.values(COUNTRY_MONTH_URLS).forEach(countryObj => {
    Object.keys(countryObj).forEach(m => monthsSet.add(m));
  });
  const monthOrder = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  return Array.from(monthsSet).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
}

function getComplianceBadge(numVal) {
  if (isNaN(numVal) || numVal === null) return '-';
  let colorClass = 'dot-red';
  if (numVal >= 90) colorClass = 'dot-green';
  else if (numVal >= 50) colorClass = 'dot-yellow';

  return `<span class="status-dot ${colorClass}"></span>${numVal.toFixed(1)}%`;
}

function getScoreBadge(numVal) {
  if (isNaN(numVal) || numVal === 0) return '-';
  let colorClass = 'red';
  if (numVal >= 90) colorClass = 'green';
  else if (numVal >= 50) colorClass = 'yellow';

  return `<span class="score-badge ${colorClass}">${numVal.toFixed(1)}%</span>`;
}

// ======================================================
// 3. CARGA DE DATOS Y FILTROS
// ======================================================

function populateCountrySelector() {
  const selectPais = document.getElementById('filter-pais');
  if (!selectPais) return;

  selectPais.innerHTML = '<option value="todos">Todos los Países</option>';
  Object.keys(COUNTRY_MONTH_URLS).forEach(countryKey => {
    const option = document.createElement('option');
    option.value = countryKey;
    option.textContent = countryKey;
    selectPais.appendChild(option);
  });

  selectPais.value = selectedCountry || 'todos';

  if (!selectPais.dataset.hasListener) {
    selectPais.addEventListener('change', handleCountryChange);
    selectPais.dataset.hasListener = "true";
  }
}

async function handleCountryChange() {
  const selectPais = document.getElementById('filter-pais');
  if (selectPais) {
    selectedCountry = selectPais.value;
  }
  filterData();
}

function populateMonthSelector() {
  const selectMes = document.getElementById('filter-mes');
  if (!selectMes) return;

  const currentVal = selectMes.value || 'todos';
  selectMes.innerHTML = '<option value="todos">Todos los meses</option>';

  const monthKeys = getActiveMonthKeys();
  monthKeys.forEach(monthKey => {
    const option = document.createElement('option');
    option.value = monthKey;
    const formattedName = monthKey.charAt(0).toUpperCase() + monthKey.slice(1);
    option.textContent = `${formattedName} 2026`;
    selectMes.appendChild(option);
  });

  selectMes.value = monthKeys.includes(currentVal) ? currentVal : 'todos';

  if (!selectMes.dataset.hasListener) {
    selectMes.addEventListener('change', loadDashboardData);
    selectMes.dataset.hasListener = "true";
  }
}

async function preloadAllMonths() {
  const monthKeys = getActiveMonthKeys();
  if (monthKeys.length === 0) return;

  const monthPromises = monthKeys.map(month => new Promise(async (resolve) => {
    const countries = Object.keys(COUNTRY_MONTH_URLS).filter(c => COUNTRY_MONTH_URLS[c][month]);

    const countryPromises = countries.map(country => new Promise((resCountry) => {
      Papa.parse(COUNTRY_MONTH_URLS[country][month], {
        download: true,
        header: true,
        skipEmptyLines: 'greedy',
        transformHeader: h => (h ? h.replace(/<[^>]*>/g, '').replace(/[\r\n]/g, '').trim() : ''),
        complete: res => resCountry(
          (res.data || [])
            .map(r => ({ ...r, _MES_ORIGEN: month, _PAIS_ORIGEN: country }))
            .filter(r => getRowValue(r, 'PROMOTOR') !== '')
        ),
        error: () => resCountry([])
      });
    }));

    const monthRows = await Promise.all(countryPromises);
    resolve({ month, data: monthRows.flat() });
  }));

  const results = await Promise.all(monthPromises);
  allMonthsData = {};
  results.forEach(res => { allMonthsData[res.month] = res.data; });

  loadDashboardData();
}

function loadDashboardData() {
  const selectedMonth = document.getElementById('filter-mes')?.value || 'todos';

  if (selectedMonth === 'todos') {
    rawData = [];
    Object.keys(allMonthsData).forEach(m => {
      rawData = rawData.concat(allMonthsData[m]);
    });
  } else {
    rawData = allMonthsData[selectedMonth] || [];
  }

  filterData();
}

function filterData() {
  const selectedPaisVal = document.getElementById('filter-pais')?.value || 'todos';

  filteredData = rawData.filter(item => {
    const country = item._PAIS_ORIGEN || '';
    return selectedPaisVal === 'todos' || country === selectedPaisVal;
  });

  renderAllTables();
}

function resetAllFilters() {
  const selectPais = document.getElementById('filter-pais');
  if (selectPais) selectPais.value = 'todos';

  const selectMes = document.getElementById('filter-mes');
  if (selectMes) selectMes.value = 'todos';

  selectedCountry = 'todos';
  loadDashboardData();
}

// ======================================================
// 4. AGREGACIÓN Y RENDERIZADO MACRO POR PAÍS
// ======================================================

function getCountryAggregatedData(data) {
  const countryMap = {};

  data.forEach(row => {
    const pais = row._PAIS_ORIGEN || 'Sin País';
    const cierre = parseNum(getRowValue(row, 'CIERRE'));
    const meta = parseNum(getRowValue(row, 'META'));

    if (!countryMap[pais]) {
      countryMap[pais] = {
        pais: pais,
        totalAgentes: 0,
        lowPerfCount: 0,
        metaTotal: 0,
        cierreTotal: 0,
        sumHab: 0, countHab: 0,
        sumSondeo: 0, countSondeo: 0,
        sumPers: 0, countPers: 0,
        sumObj: 0, countObj: 0,
        sumCierreNota: 0, countCierreNota: 0,
        sumCalidad: 0, countCalidad: 0
      };
    }

    countryMap[pais].totalAgentes += 1;
    countryMap[pais].metaTotal += meta;
    countryMap[pais].cierreTotal += cierre;

    const cumplimientoInd = meta > 0 ? (cierre / meta) * 100 : 0;
    if (cumplimientoInd < 50) {
      countryMap[pais].lowPerfCount += 1;
    }

    const nHab = parseNum(getRowValue(row, 'NOTA HABILIDADES COMUNICATIVAS'));
    if (nHab > 0) { countryMap[pais].sumHab += nHab; countryMap[pais].countHab++; }

    const nSondeo = parseNum(getRowValue(row, 'NOTA SONDEO'));
    if (nSondeo > 0) { countryMap[pais].sumSondeo += nSondeo; countryMap[pais].countSondeo++; }

    const nPers = parseNum(getRowValue(row, 'NOTA PERSONALIZACIÓN'));
    if (nPers > 0) { countryMap[pais].sumPers += nPers; countryMap[pais].countPers++; }

    const nObj = parseNum(getRowValue(row, 'NOTA MANEJO DE OBJECIONES'));
    if (nObj > 0) { countryMap[pais].sumObj += nObj; countryMap[pais].countObj++; }

    const nCierre = parseNum(getRowValue(row, 'NOTA CIERRE'));
    if (nCierre > 0) { countryMap[pais].sumCierreNota += nCierre; countryMap[pais].countCierreNota++; }

    const nFinal = parseNum(getRowValue(row, 'NOTA FINAL'));
    if (nFinal > 0) { countryMap[pais].sumCalidad += nFinal; countryMap[pais].countCalidad++; }
  });

  return Object.values(countryMap).map(c => ({
    ...c,
    cumplimientoPct: c.metaTotal > 0 ? ((c.cierreTotal / c.metaTotal) * 100) : 0,
    pctLowPerf: c.totalAgentes > 0 ? ((c.lowPerfCount / c.totalAgentes) * 100) : 0,
    notaHabilidades: c.countHab > 0 ? (c.sumHab / c.countHab) : 0,
    notaSondeo: c.countSondeo > 0 ? (c.sumSondeo / c.countSondeo) : 0,
    notaPersonalizacion: c.countPers > 0 ? (c.sumPers / c.countPers) : 0,
    notaObjeciones: c.countObj > 0 ? (c.sumObj / c.countObj) : 0,
    notaCierre: c.countCierreNota > 0 ? (c.sumCierreNota / c.countCierreNota) : 0,
    notaFinal: c.countCalidad > 0 ? (c.sumCalidad / c.countCalidad) : 0
  }));
}

function renderHeaderSummary() {
  const aggregated = getCountryAggregatedData(filteredData);
  if (aggregated.length === 0) return;

  // 1. País Líder del Mes
  const topCountryObj = [...aggregated].sort((a, b) => b.cumplimientoPct - a.cumplimientoPct)[0];
  const elTopCountry = document.getElementById('kpi-top-country');
  const elTopCountryPct = document.getElementById('kpi-top-country-pct');
  if (elTopCountry) elTopCountry.textContent = topCountryObj ? topCountryObj.pais : '-';
  if (elTopCountryPct) elTopCountryPct.textContent = topCountryObj ? `${topCountryObj.cumplimientoPct.toFixed(1)}% Cumplimiento` : 'Mayor % de Cumplimiento';

  // 2. Cumplimiento Regional Promedio
  const totalMetaReg = aggregated.reduce((s, c) => s + c.metaTotal, 0);
  const totalCierreReg = aggregated.reduce((s, c) => s + c.cierreTotal, 0);
  const regionalCompliance = totalMetaReg > 0 ? ((totalCierreReg / totalMetaReg) * 100).toFixed(1) : '0.0';
  const elRegionalCompliance = document.getElementById('kpi-regional-compliance');
  if (elRegionalCompliance) elRegionalCompliance.textContent = `${regionalCompliance}%`;

  // 3. Ventas Totales Consolidadas
  const elTotalSales = document.getElementById('kpi-total-sales');
  const elTotalMeta = document.getElementById('kpi-total-meta');
  if (elTotalSales) elTotalSales.textContent = totalCierreReg.toLocaleString();
  if (elTotalMeta) elTotalMeta.textContent = `Meta Total: ${totalMetaReg.toLocaleString()}`;

  // 4. Mayor Proporción Low Perf.
  const criticalCountryObj = [...aggregated].sort((a, b) => b.pctLowPerf - a.pctLowPerf)[0];
  const elCriticalCountry = document.getElementById('kpi-critical-country');
  if (elCriticalCountry) elCriticalCountry.textContent = criticalCountryObj ? `${criticalCountryObj.pais} (${criticalCountryObj.pctLowPerf.toFixed(1)}%)` : '-';

  // 5. Nota Calidad Regional
  const validQualities = aggregated.filter(c => c.notaFinal > 0);
  const avgQualityReg = validQualities.length > 0 
    ? (validQualities.reduce((s, c) => s + c.notaFinal, 0) / validQualities.length).toFixed(1)
    : '0.0';
  const elAvgQuality = document.getElementById('kpi-avg-quality');
  if (elAvgQuality) elAvgQuality.textContent = `${avgQualityReg}%`;
}

function renderCountryTable(data) {
  const tbody = document.querySelector('#country-table tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  let aggregated = getCountryAggregatedData(data);
  if (aggregated.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:20px;">No hay datos disponibles para el filtro seleccionado.</td></tr>';
    return;
  }

  const sortInfo = sortState['country-table'];
  if (sortInfo && sortInfo.column) {
    const col = sortInfo.column;
    const isAsc = sortInfo.isAsc;
    aggregated.sort((a, b) => {
      let valA = a[col];
      let valB = b[col];
      if (typeof valA === 'string') {
        return isAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return isAsc ? valA - valB : valB - valA;
    });
  }

  aggregated.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${c.pais}</strong></td>
      <td style="text-align:center;">${c.totalAgentes}</td>
      <td style="text-align:center;">${c.metaTotal.toLocaleString()}</td>
      <td style="text-align:center;"><strong>${c.cierreTotal.toLocaleString()}</strong></td>
      <td style="text-align:center;">${getComplianceBadge(c.cumplimientoPct)}</td>
      <td style="text-align:center;"><span style="color:#ef4444; font-weight:bold;">${c.pctLowPerf.toFixed(1)}%</span> (${c.lowPerfCount})</td>
      <td style="text-align:center;">${getScoreBadge(c.notaFinal)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderCountryDiagnosticTable(data) {
  const tbody = document.querySelector('#country-diagnostic-table tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  let aggregated = getCountryAggregatedData(data);
  if (aggregated.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding:20px;">No hay evaluaciones de calidad disponibles.</td></tr>';
    return;
  }

  const sortInfo = sortState['country-diagnostic-table'];
  if (sortInfo && sortInfo.column) {
    const col = sortInfo.column;
    const isAsc = sortInfo.isAsc;
    aggregated.sort((a, b) => {
      let valA = a[col];
      let valB = b[col];
      if (typeof valA === 'string') {
        return isAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return isAsc ? valA - valB : valB - valA;
    });
  }

  aggregated.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${c.pais}</strong></td>
      <td style="text-align:center;">${getScoreBadge(c.notaHabilidades)}</td>
      <td style="text-align:center;">${getScoreBadge(c.notaSondeo)}</td>
      <td style="text-align:center;">${getScoreBadge(c.notaPersonalizacion)}</td>
      <td style="text-align:center;">${getScoreBadge(c.notaObjeciones)}</td>
      <td style="text-align:center;">${getScoreBadge(c.notaCierre)}</td>
      <td style="text-align:center;"><strong>${getScoreBadge(c.notaFinal)}</strong></td>
      <td style="text-align:center;">${getComplianceBadge(c.cumplimientoPct)}</td>
    `;
    tbody.appendChild(tr);
  });

  renderQualityScatterPlot(aggregated);
}

// ======================================================
// 5. GRÁFICOS REGIONALES POR PAÍS
// ======================================================

function renderCountryTrends() {
  const monthKeys = getActiveMonthKeys();
  if (monthKeys.length === 0) return;

  const labels = monthKeys.map(m => m.charAt(0).toUpperCase() + m.slice(1));
  const countries = Object.keys(COUNTRY_MONTH_URLS);

  // 1. Gráfico de Evolución de Cumplimiento
  const datasetsCumpl = countries.map(country => {
    const dataPoints = monthKeys.map(month => {
      const rows = (allMonthsData[month] || []).filter(r => (r._PAIS_ORIGEN || '') === country);
      const meta = rows.reduce((s, r) => s + parseNum(getRowValue(r, 'META')), 0);
      const cierre = rows.reduce((s, r) => s + parseNum(getRowValue(r, 'CIERRE')), 0);
      return meta > 0 ? parseFloat(((cierre / meta) * 100).toFixed(1)) : 0;
    });

    return {
      label: country,
      data: dataPoints,
      borderColor: COUNTRY_COLORS[country] || '#3b82f6',
      backgroundColor: COUNTRY_COLORS[country] || '#3b82f6',
      borderWidth: 3,
      tension: 0.3,
      fill: false,
      pointRadius: 5
    };
  });

  const canvasCumpl = document.getElementById('chartCumplimientoPorPais');
  if (canvasCumpl) {
    let existingChart = Chart.getChart(canvasCumpl);
    if (existingChart) existingChart.destroy();

    new Chart(canvasCumpl.getContext('2d'), {
      type: 'line',
      data: { labels, datasets: datasetsCumpl },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
          annotation: {
            annotations: {
              metaLine: {
                type: 'line', yMin: 100, yMax: 100,
                borderColor: '#ef4444', borderWidth: 2, borderDash: [6, 6],
                label: { display: true, content: 'Meta 100%', position: 'end', backgroundColor: 'rgba(239, 68, 68, 0.8)', color: '#fff' }
              }
            }
          }
        },
        scales: { y: { beginAtZero: true, ticks: { callback: v => `${v}%` } } }
      }
    });
  }

  // 2. Gráfico de Volumen de Ventas vs Meta
  const canvasVentas = document.getElementById('chartVentasPorPais');
  if (canvasVentas) {
    let existingChart = Chart.getChart(canvasVentas);
    if (existingChart) existingChart.destroy();

    const aggregated = getCountryAggregatedData(filteredData);
    const countryLabels = aggregated.map(c => c.pais);
    const ventasData = aggregated.map(c => c.cierreTotal);
    const metaData = aggregated.map(c => c.metaTotal);

    new Chart(canvasVentas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: countryLabels,
        datasets: [
          { label: 'VentasTotales (Cierre)', data: ventasData, backgroundColor: '#10b981', borderRadius: 4 },
          { label: 'Meta Consolidada', data: metaData, backgroundColor: '#ff4444', borderRadius: 4 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // 3. Gráfico de Semáforo de Desempeño
  const canvasSemaforo = document.getElementById('chartSemaforoPorPais');
  if (canvasSemaforo) {
    let existingChart = Chart.getChart(canvasSemaforo);
    if (existingChart) existingChart.destroy();

    const aggregated = getCountryAggregatedData(filteredData);
    const countryLabels = aggregated.map(c => c.pais);

    const rojoData = [];
    const amarilloData = [];
    const verdeData = [];

    countryLabels.forEach(country => {
      const rows = filteredData.filter(r => (r._PAIS_ORIGEN || '') === country);
      let cRojo = 0, cAmarillo = 0, cVerde = 0;
      rows.forEach(r => {
        const m = parseNum(getRowValue(r, 'META'));
        const v = parseNum(getRowValue(r, 'CIERRE'));
        const pct = m > 0 ? (v / m) * 100 : 0;
        if (pct < 50) cRojo++;
        else if (pct < 90) cAmarillo++;
        else cVerde++;
      });
      rojoData.push(cRojo);
      amarilloData.push(cAmarillo);
      verdeData.push(cVerde);
    });

    new Chart(canvasSemaforo.getContext('2d'), {
      type: 'bar',
      data: {
        labels: countryLabels,
        datasets: [
          { label: 'Rojo (<50%)', data: rojoData, backgroundColor: '#ff4d4d' },
          { label: 'Amarillo (50%-89%)', data: amarilloData, backgroundColor: '#ffc107' },
          { label: 'Verde (>=90%)', data: verdeData, backgroundColor: '#00c853' }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } },
        scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } }
      }
    });
  }
}

function renderQualityScatterPlot(aggregatedData) {
  const canvas = document.getElementById('chartQualityVsPerformance');
  if (!canvas) return;

  const validData = aggregatedData.filter(c => c.notaFinal > 0);

  if (scatterChartInstance) {
    scatterChartInstance.destroy();
  }

  const scatterPoints = validData.map(c => ({
    x: c.notaFinal,
    y: c.cumplimientoPct,
    country: c.pais
  }));

  const ctx = canvas.getContext('2d');
  scatterChartInstance = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Países',
        data: scatterPoints,
        backgroundColor: 'rgba(37, 99, 235, 0.8)',
        borderColor: '#1d4ed8',
        borderWidth: 2,
        pointRadius: 9,
        pointHoverRadius: 12
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.raw.country}: Calidad = ${ctx.raw.x.toFixed(1)}% | Cumplimiento = ${ctx.raw.y.toFixed(1)}%`
          }
        }
      },
      scales: {
        x: { title: { display: true, text: 'Nota Promedio de Calidad (%)', font: { weight: 'bold' } }, min: 0, max: 100 },
        y: { title: { display: true, text: '% Cumplimiento Promedio', font: { weight: 'bold' } }, beginAtZero: true }
      }
    }
  });
}

// ======================================================
// 6. CONTROLADORES DE INTERFAZ Y NAVEGACIÓN
// ======================================================

function renderAllTables() {
  renderHeaderSummary();

  const tabSummary = document.getElementById('tab-country-summary');
  if (tabSummary && tabSummary.style.display !== 'none') {
    renderCountryTable(filteredData);
  }

  const tabTrends = document.getElementById('tab-country-trends');
  if (tabTrends && tabTrends.style.display !== 'none') {
    renderCountryTrends();
  }

  const tabQuality = document.getElementById('tab-country-quality');
  if (tabQuality && tabQuality.style.display !== 'none') {
    renderCountryDiagnosticTable(filteredData);
  }
}

function switchTab(tabName, evt) {
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

  const tabSummary = document.getElementById('tab-country-summary');
  const tabTrends = document.getElementById('tab-country-trends');
  const tabQuality = document.getElementById('tab-country-quality');

  if (tabSummary) tabSummary.style.display = 'none';
  if (tabTrends) tabTrends.style.display = 'none';
  if (tabQuality) tabQuality.style.display = 'none';

  if (tabName === 'country-summary' && tabSummary) {
    tabSummary.style.display = 'block';
    renderCountryTable(filteredData);
  } else if (tabName === 'country-trends' && tabTrends) {
    tabTrends.style.display = 'block';
    renderCountryTrends();
  } else if (tabName === 'country-quality' && tabQuality) {
    tabQuality.style.display = 'block';
    renderCountryDiagnosticTable(filteredData);
  }

  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add('active');
  }
}

function handleSort(tableId, columnKey) {
  const current = sortState[tableId];
  if (!current) return;

  if (current.column === columnKey) {
    current.isAsc = !current.isAsc;
  } else {
    current.column = columnKey;
    current.isAsc = true;
  }

  if (tableId === 'country-table') {
    renderCountryTable(filteredData);
  } else if (tableId === 'country-diagnostic-table') {
    renderCountryDiagnosticTable(filteredData);
  }
}

// ======================================================
// 7. EXPORTACIÓN A PDF
// ======================================================

async function exportCurrentViewToPDF() {
  const { jsPDF } = window.jspdf;
  const btnExport = document.getElementById('btn-export-pdf');
  if (!btnExport) return;

  btnExport.textContent = 'Generando...';
  btnExport.disabled = true;

  try {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageHeight = 190;
    const pdfWidth = 269;

    const activeTabBtn = document.querySelector('.tab-button.active');
    const tabTitle = activeTabBtn ? activeTabBtn.textContent.trim() : 'Reporte';
    const activeTabContainer = document.querySelector('.tab-content:not([style*="display: none"])') || document.body;

    doc.setFontSize(14);
    doc.setTextColor(30, 41, 59);
    doc.text(`Reporte Macro Regional (${selectedCountry}): ${tabTitle}`, 14, 12);

    let currentY = 22;

    const visualBlocks = Array.from(activeTabContainer.querySelectorAll('.chart-card, .summary-cards-grid'));

    for (let i = 0; i < visualBlocks.length; i++) {
      const block = visualBlocks[i];
      if (block.offsetWidth === 0 || block.offsetHeight === 0) continue;

      block.scrollIntoView({ block: 'center' });
      await new Promise(resolve => setTimeout(resolve, 150));

      const canvas = await html2canvas(block, { scale: 2, useCORS: true, logging: false });
      const imgData = canvas.toDataURL('image/png');
      const pxToMm = 0.264583;
      let finalWidth = (canvas.width / 2) * pxToMm;
      let finalHeight = (canvas.height / 2) * pxToMm;

      if (finalWidth > pdfWidth) {
        finalHeight = finalHeight * (pdfWidth / finalWidth);
        finalWidth = pdfWidth;
      }

      if (currentY + finalHeight > pageHeight) {
        doc.addPage();
        currentY = 15;
      }

      const xPosition = 14 + ((pdfWidth - finalWidth) / 2);
      doc.addImage(imgData, 'PNG', xPosition, currentY, finalWidth, finalHeight);
      currentY += finalHeight + 8;
    }

    const tables = activeTabContainer.querySelectorAll('table');
    tables.forEach(tableEl => {
      if (currentY > 150) {
        doc.addPage();
        currentY = 15;
      }

      doc.autoTable({
        html: tableEl,
        startY: currentY,
        theme: 'grid',
        styles: { fontSize: 8, cellPadding: 2, halign: 'center' },
        headStyles: { fillColor: [6, 183, 6], textColor: [255, 255, 255], fontStyle: 'bold' }
      });

      currentY = doc.lastAutoTable.finalY + 8;
    });

    doc.save(`Reporte_Consolidado_${selectedCountry}_${new Date().toISOString().slice(0, 10)}.pdf`);
  } catch (err) {
    console.error('Error al exportar PDF:', err);
  } finally {
    btnExport.textContent = 'Exportar a PDF';
    btnExport.disabled = false;
  }
}

// ======================================================
// 8. INICIALIZACIÓN
// ======================================================

document.addEventListener('DOMContentLoaded', () => {
  const btnExport = document.getElementById('btn-export-pdf');
  if (btnExport) btnExport.addEventListener('click', exportCurrentViewToPDF);

  document.getElementById('btn-reset')?.addEventListener('click', resetAllFilters);

  populateCountrySelector();
  populateMonthSelector();
  preloadAllMonths();
});