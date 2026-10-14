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

let selectedCountry = 'todos';
let MONTH_URLS = {};

const SUPERVISOR_COLORS = [
  '#2563eb', '#10b981', '#f59e0b', '#ef4444', 
  '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16', 
  '#f97316', '#6366f1', '#14b8a6', '#d97706'
];

let allMonthsData = {};
let rawData = [];
let filteredData = [];
let focusCharts = [];
let scatterChartInstance = null;

let onlyCriticalRisk = false; 
let onlyConsistentGreen = false;
let onlyRegularPerformers = false;

let sortState = {
  'focus-table': { column: null, isAsc: true },
  'trainers-table': { column: null, isAsc: true },
  'supervisors-table': { column: null, isAsc: true },
  'coordinators-table': { column: null, isAsc: true },
  'diagnostic-table': { column: null, isAsc: true }
};

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

function filterRow(row) {
  const trainerVal = document.getElementById('filter-trainer')?.value || '';
  const supervisorVal = document.getElementById('filter-supervisor')?.value || '';
  const coordinadorVal = document.getElementById('filter-coordinador')?.value || '';
  const statusVal = document.getElementById('filter-status')?.value || '';

  const matchTrainer = !trainerVal || getRowValue(row, 'TRAINER') === trainerVal;
  const matchSupervisor = !supervisorVal || getRowValue(row, 'SUPERVISOR') === supervisorVal;
  const matchCoordinador = !coordinadorVal || getRowValue(row, 'COORDINADOR') === coordinadorVal;
  const matchStatus = !statusVal || getRowValue(row, 'STATUS AGENTE') === statusVal;

  return matchTrainer && matchSupervisor && matchCoordinador && matchStatus;
}

function getActiveMonthKeys() {
  if (selectedCountry === 'todos') {
    const monthsSet = new Set();
    Object.values(COUNTRY_MONTH_URLS).forEach(countryObj => {
      Object.keys(countryObj).forEach(m => monthsSet.add(m));
    });
    const monthOrder = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return Array.from(monthsSet).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
  }
  return Object.keys(COUNTRY_MONTH_URLS[selectedCountry] || {});
}

function populateCountrySelector() {
  const selectPais = document.getElementById('filter-pais');
  if (!selectPais) return;

  selectPais.innerHTML = '<option value="todos">Todos los países</option>';
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
    MONTH_URLS = selectedCountry === 'todos' ? {} : (COUNTRY_MONTH_URLS[selectedCountry] || {});
  }
  allMonthsData = {};
  populateMonthSelector();
  await preloadAllMonths();
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

  if (monthKeys.includes(currentVal)) {
    selectMes.value = currentVal;
  } else {
    selectMes.value = 'todos';
  }
}

async function fetchCurrentMonthData() {
  const monthKeys = getActiveMonthKeys();
  if (monthKeys.length === 0) return;

  const lastMonthKey = monthKeys[monthKeys.length - 1];
  const countriesToFetch = selectedCountry === 'todos' 
    ? Object.keys(COUNTRY_MONTH_URLS).filter(c => COUNTRY_MONTH_URLS[c][lastMonthKey])
    : (COUNTRY_MONTH_URLS[selectedCountry] ? [selectedCountry] : []);

  const fetchPromises = countriesToFetch.map(country => new Promise((resolve) => {
    const freshUrl = `${COUNTRY_MONTH_URLS[country][lastMonthKey]}&_cb=${Date.now()}`;
    Papa.parse(freshUrl, {
      download: true,
      header: true,
      skipEmptyLines: 'greedy',
      transformHeader: h => (h ? h.replace(/<[^>]*>/g, '').replace(/[\r\n]/g, '').trim() : ''),
      complete: res => {
        const rows = (res.data || [])
          .map(r => ({ ...r, _MES_ORIGEN: lastMonthKey, _PAIS_ORIGEN: country }))
          .filter(r => getRowValue(r, 'PROMOTOR') !== '');
        resolve(rows);
      },
      error: () => resolve([])
    });
  }));

  const results = await Promise.all(fetchPromises);
  allMonthsData[lastMonthKey] = results.flat();
  loadDashboardData();
}

async function preloadAllMonths() {
  const monthKeys = getActiveMonthKeys();
  if (monthKeys.length === 0) return;

  const lastMonthKey = monthKeys[monthKeys.length - 1];
  const cacheKeySuffix = selectedCountry.toLowerCase().replace(/\s+/g, '_');
  const HISTORICAL_CACHE_KEY = `dashboard_consolidado_historical_${cacheKeySuffix}_v1`;
  
  let cachedHistorical = localStorage.getItem(HISTORICAL_CACHE_KEY);
  let historicalData = cachedHistorical ? JSON.parse(cachedHistorical) : {};
  const missingHistorical = monthKeys.filter(m => m !== lastMonthKey && !historicalData[m]);

  if (missingHistorical.length > 0) {
    const historicalPromises = missingHistorical.map(month => new Promise(async (resolve) => {
      const countriesToFetch = selectedCountry === 'todos'
        ? Object.keys(COUNTRY_MONTH_URLS).filter(c => COUNTRY_MONTH_URLS[c][month])
        : (COUNTRY_MONTH_URLS[selectedCountry]?.[month] ? [selectedCountry] : []);

      const countryPromises = countriesToFetch.map(country => new Promise((resCountry) => {
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

      const monthRowsArray = await Promise.all(countryPromises);
      resolve({ month, data: monthRowsArray.flat() });
    }));

    const results = await Promise.all(historicalPromises);
    results.forEach(res => { historicalData[res.month] = res.data; });
    try {
      localStorage.setItem(HISTORICAL_CACHE_KEY, JSON.stringify(historicalData));
    } catch (e) {
      console.warn("localStorage lleno, se omite caché local.");
    }
  }

  allMonthsData = { ...historicalData };
  await fetchCurrentMonthData();
}

function loadDashboardData() {
  const selectedMonth = document.getElementById('filter-mes')?.value || 'todos';
  const agentMonthsMap = buildAgentMonthsMap();

  if (selectedMonth === 'todos') {
    rawData = [];
    Object.keys(allMonthsData).forEach(m => {
      rawData = rawData.concat(allMonthsData[m]);
    });
  } else {
    rawData = allMonthsData[selectedMonth] || [];
  }

  rawData = rawData.map(row => {
    const agentName = getRowValue(row, 'PROMOTOR').toUpperCase();
    const activeMonths = agentMonthsMap[agentName] || [];
    const currentRowMonth = row._MES_ORIGEN;

    const formattedMonths = activeMonths
      .map(m => {
        const nameFormatted = m.charAt(0).toUpperCase() + m.slice(1);
        if (m === currentRowMonth) {
          return `<span class="active-month-badge">${nameFormatted}</span>`;
        }
        return nameFormatted;
      })
      .join(', ');

    return {
      ...row,
      'MESES_ACTIVO': formattedMonths || '-'
    };
  });

  resetSelect('filter-trainer');
  resetSelect('filter-supervisor');
  resetSelect('filter-coordinador');
  resetSelect('filter-status');

  populateFilters(rawData);
  filterData();
}

function renderAllTables() {
  renderHeaderSummary();

  renderFocusTable(filteredData);
  renderLeadersTables(filteredData);
  renderDiagnosticTable(filteredData);
  
  const tabTrends = document.getElementById('tab-trends');
  if (tabTrends && tabTrends.style.display !== 'none') {
    const activeSubtab = document.querySelector('#tab-trends .subtab-button.active');
    if (activeSubtab) {
      if (activeSubtab.textContent.includes('Líder')) {
        renderTrendsLeaderTable();
      } else if (activeSubtab.textContent.includes('Global')) {
        renderTrendsGlobalTable();
      }
    }
  }
}

function buildAgentMonthsMap() {
  const map = {};
  Object.keys(allMonthsData).forEach(month => {
    allMonthsData[month].forEach(row => {
      const agent = getRowValue(row, 'PROMOTOR').toUpperCase();
      if (agent) {
        if (!map[agent]) map[agent] = [];
        if (!map[agent].includes(month)) {
          map[agent].push(month);
        }
      }
    });
  });
  return map;
}

function resetSelect(elementId) {
  const select = document.getElementById(elementId);
  if (select) {
    select.innerHTML = '<option value="">Todos</option>';
  }
}

function populateFilters(data) {
  const trainers = [...new Set(data.map(item => getRowValue(item, 'TRAINER')).filter(Boolean))];
  const supervisors = [...new Set(data.map(item => getRowValue(item, 'SUPERVISOR')).filter(Boolean))];
  const coordinadores = [...new Set(data.map(item => getRowValue(item, 'COORDINADOR')).filter(Boolean))];
  const statuses = [...new Set(data.map(item => getRowValue(item, 'STATUS AGENTE')).filter(val => val && val !== '-'))];

  fillSelect('filter-trainer', trainers);
  fillSelect('filter-supervisor', supervisors);
  fillSelect('filter-coordinador', coordinadores);
  fillSelectWithUnassignedStatus('filter-status', statuses);
}

function fillSelectWithUnassignedStatus(elementId, options) {
  const select = document.getElementById(elementId);
  if (!select) return;

  const currentVal = select.value;
  select.innerHTML = '<option value="">Todos</option>';

  const unassignedOpt = document.createElement('option');
  unassignedOpt.value = 'sin_status';
  unassignedOpt.textContent = 'Sin Status';
  select.appendChild(unassignedOpt);

  options.sort().forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    option.textContent = opt;
    select.appendChild(option);
  });

  if (options.includes(currentVal) || currentVal === 'sin_status') {
    select.value = currentVal;
  }

  if (!select.dataset.hasListener) {
    select.addEventListener('change', filterData);
    select.dataset.hasListener = "true";
  }
}

function fillSelect(elementId, options) {
  const select = document.getElementById(elementId);
  if (!select) return;

  const currentVal = select.value;
  select.innerHTML = '<option value="">Todos</option>';

  options.sort().forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    option.textContent = opt;
    select.appendChild(option);
  });

  if (options.includes(currentVal)) {
    select.value = currentVal;
  }

  if (!select.dataset.hasListener) {
    select.addEventListener('change', filterData);
    select.dataset.hasListener = "true";
  }
}

function filterData() {
  const searchVal = (document.getElementById('filter-search')?.value || '').toLowerCase().trim();
  const trainerVal = document.getElementById('filter-trainer')?.value || '';
  const supervisorVal = document.getElementById('filter-supervisor')?.value || '';
  const coordinadorVal = document.getElementById('filter-coordinador')?.value || '';
  const statusVal = document.getElementById('filter-status')?.value || '';
  const unassignedVal = document.getElementById('filter-unassigned')?.value || '';

  filteredData = rawData.filter(item => {
    const agent = getRowValue(item, 'PROMOTOR');
    const trainer = getRowValue(item, 'TRAINER');
    const supervisor = getRowValue(item, 'SUPERVISOR');
    const coordinador = getRowValue(item, 'COORDINADOR');
    const statusAgente = getRowValue(item, 'STATUS AGENTE');

    const matchSearch = !searchVal || 
      agent.toLowerCase().includes(searchVal) ||
      trainer.toLowerCase().includes(searchVal) ||
      supervisor.toLowerCase().includes(searchVal) ||
      coordinador.toLowerCase().includes(searchVal);

    const matchTrainer = !trainerVal || trainer === trainerVal;
    const matchSupervisor = !supervisorVal || supervisor === supervisorVal;
    const matchCoordinador = !coordinadorVal || coordinador === coordinadorVal;

    let matchStatus = true;
    if (statusVal === 'sin_status') {
      matchStatus = !statusAgente || statusAgente === '-' || statusAgente.trim() === '';
    } else if (statusVal) {
      matchStatus = statusAgente === statusVal;
    }

    let matchUnassigned = true;
    if (unassignedVal === 'sin_coordinador') {
      matchUnassigned = !coordinador || coordinador === '-' || coordinador.toLowerCase().includes('sin');
    } else if (unassignedVal === 'sin_supervisor') {
      matchUnassigned = !supervisor || supervisor === '-' || supervisor.toLowerCase().includes('sin');
    } else if (unassignedVal === 'sin_trainer') {
      matchUnassigned = !trainer || trainer === '-' || trainer.toLowerCase().includes('sin');
    } else if (unassignedVal === 'sin_lider') {
      const noCoord = !coordinador || coordinador === '-' || coordinador.toLowerCase().includes('sin');
      const noSup = !supervisor || supervisor === '-' || supervisor.toLowerCase().includes('sin');
      const noTrain = !trainer || trainer === '-' || trainer.toLowerCase().includes('sin');
      matchUnassigned = noCoord || noSup || noTrain;
    }
    
    return matchSearch && matchTrainer && matchSupervisor && matchCoordinador && matchStatus && matchUnassigned;
  });

  renderAllTables();
}

function resetAllFilters() {
  const searchInput = document.getElementById('filter-search');
  if (searchInput) searchInput.value = '';

  const selectPais = document.getElementById('filter-pais');
  if (selectPais) {
    selectPais.value = 'todos';
    selectedCountry = 'todos';
  }

  const selectMes = document.getElementById('filter-mes');
  if (selectMes) selectMes.value = 'todos';

  if (document.getElementById('filter-trainer')) document.getElementById('filter-trainer').value = '';
  if (document.getElementById('filter-supervisor')) document.getElementById('filter-supervisor').value = '';
  if (document.getElementById('filter-coordinador')) document.getElementById('filter-coordinador').value = '';
  if (document.getElementById('filter-status')) document.getElementById('filter-status').value = '';
  if (document.getElementById('filter-unassigned')) document.getElementById('filter-unassigned').value = '';

  onlyCriticalRisk = false;
  onlyConsistentGreen = false;
  onlyRegularPerformers = false;
  updateFilterButtonsUI();

  Object.keys(sortState).forEach(tableId => {
    sortState[tableId] = { column: null, isAsc: true };
  });

  allMonthsData = {};
  populateMonthSelector();
  preloadAllMonths();
}

function hasLastThreeLowMonths(agentMonthsData) {
  const monthKeys = getActiveMonthKeys();
  const last3Months = monthKeys.slice(-3);
  if (last3Months.length < 3) return false;

  return last3Months.every(m => {
    const record = agentMonthsData[m];
    if (record && record.cumplimiento !== '-') {
      const pct = parseNum(record.cumplimiento);
      return pct < 50;
    }
    return false;
  });
}

function hasTwoConsecutiveGreenMonths(agentMonthsData) {
  const monthKeys = getActiveMonthKeys();
  if (monthKeys.length < 2) return false;
  const last2Months = monthKeys.slice(-2);

  return last2Months.every(m => {
    const record = agentMonthsData[m];
    if (record && record.cumplimiento !== '-') {
      const pct = parseNum(record.cumplimiento);
      return pct >= 90;
    }
    return false;
  });
}

function switchTab(tabName, evt) {
  if (tabName !== 'focus') {
    if (onlyCriticalRisk) toggleCriticalRiskFilter();
    if (onlyConsistentGreen) toggleConsistentGreenFilter();
    if (onlyRegularPerformers) toggleRegularPerformersFilter();
  }
  
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  
  const tabFocus = document.getElementById('tab-focus');
  const tabLeaders = document.getElementById('tab-leaders');
  const tabTrends = document.getElementById('tab-trends');
  const tabDiagnostic = document.getElementById('tab-diagnostic');

  if (tabFocus) tabFocus.style.display = 'none';
  if (tabLeaders) tabLeaders.style.display = 'none';
  if (tabTrends) tabTrends.style.display = 'none';
  if (tabDiagnostic) tabDiagnostic.style.display = 'none';

  if (tabName === 'focus' && tabFocus) tabFocus.style.display = 'block';
  if (tabName === 'leaders' && tabLeaders) tabLeaders.style.display = 'block';
  if (tabName === 'trends' && tabTrends) {
    tabTrends.style.display = 'block';
    const activeSubtab = document.querySelector('#tab-trends .subtab-button.active');
    if (activeSubtab && activeSubtab.textContent.includes('Líder')) {
      renderTrendsLeaderTable();
    } else if (activeSubtab && activeSubtab.textContent.includes('Global')) {
      renderTrendsGlobalTable();
    }
  }
  if (tabName === 'diagnostic' && tabDiagnostic) {
    tabDiagnostic.style.display = 'block';
    renderDiagnosticTable(filteredData);
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

  if (tableId === 'focus-table') {
    renderFocusTable(filteredData);
  } else if (tableId === 'trainers-table') {
    renderGroupedTable(filteredData, 'TRAINER', '#trainers-table tbody', 'trainers-table');
  } else if (tableId === 'supervisors-table') {
    renderGroupedTable(filteredData, 'SUPERVISOR', '#supervisors-table tbody', 'supervisors-table');
  } else if (tableId === 'coordinators-table') {
    renderGroupedTable(filteredData, 'COORDINADOR', '#coordinators-table tbody', 'coordinators-table');
  } else if (tableId === 'diagnostic-table') {
    renderDiagnosticTable(filteredData);
  }
}

function parseNum(val) {
  if (!val) return 0;
  let num = parseFloat(val.toString().replace('%', '').replace(',', '.'));
  return isNaN(num) ? 0 : num;
}

function getComplianceBadge(valueStr) {
  if (!valueStr || valueStr === '-') return '-';
  
  let num = parseFloat(valueStr.toString().replace('%', '').replace(',', '.'));
  if (isNaN(num)) return valueStr;

  let colorClass = 'dot-red';
  if (num >= 90) {
    colorClass = 'dot-green';
  } else if (num >= 50) {
    colorClass = 'dot-yellow';
  }

  return `<span class="status-dot ${colorClass}"></span>${num.toFixed(1)}%`;
}

function renderFocusTable(data) {
  const table = document.getElementById('focus-table');
  if (!table) return;
  
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  thead.innerHTML = '';
  tbody.innerHTML = '';

  focusCharts.forEach(chart => chart.destroy());
  focusCharts = [];

  if (!data || data.length === 0) {
    tbody.innerHTML = '<tr><td style="text-align:center;">No hay datos disponibles.</td></tr>';
    return;
  }

  const selectedMonth = document.getElementById('filter-mes')?.value || 'todos';
  let monthsToDisplay = selectedMonth === 'todos' ? getActiveMonthKeys() : [selectedMonth];

  const currentSort = sortState['focus-table'] || { column: null, isAsc: true };

  let headerHTML = `<tr><th onclick="handleSort('focus-table', 'PROMOTOR')" style="cursor:pointer;">Agente</th>`;
  monthsToDisplay.forEach(m => {
    const mesFormatted = m.charAt(0).toUpperCase() + m.slice(1);
    const colCierre = `cierre_${m}`;
    const colCumpl = `cumplimiento_${m}`;

    headerHTML += `<th onclick="handleSort('focus-table', '${colCierre}')" style="text-align:center; cursor:pointer;">Cierre (${mesFormatted})</th>`;
    headerHTML += `<th onclick="handleSort('focus-table', '${colCumpl}')" style="text-align:center; cursor:pointer;">Cumpl. % (${mesFormatted})</th>`;
  });
  headerHTML += `</tr>`;
  thead.innerHTML = headerHTML;

  const fullAgentsMap = {};
  const monthKeys = Object.keys(allMonthsData);
  const lastMonthKey = monthKeys[monthKeys.length - 1];

  Object.keys(allMonthsData).forEach(m => {
    allMonthsData[m].forEach(row => {
      const agentName = getRowValue(row, 'PROMOTOR');
      if (!agentName) return;

      if (!fullAgentsMap[agentName]) {
        fullAgentsMap[agentName] = { 
          agentName: agentName, 
          monthsData: {},
          lastMonthStatus: '' 
        };
      }

      fullAgentsMap[agentName].monthsData[m] = {
        cierre: parseNum(getRowValue(row, 'CIERRE')),
        cumplimiento: getRowValue(row, 'CUMPLIMIENTO MES') || '-'
      };

      if (m === lastMonthKey) {
        fullAgentsMap[agentName].lastMonthStatus = getRowValue(row, 'STATUS AGENTE').toUpperCase();
      }
    });
  });

  const agentsMap = {};
  data.forEach(row => {
    const agentName = getRowValue(row, 'PROMOTOR');
    if (!agentName) return;

    if (!agentsMap[agentName]) {
      agentsMap[agentName] = fullAgentsMap[agentName] || { agentName: agentName, monthsData: {}, lastMonthStatus: '' };
    }
  });

  let agentsList = Object.values(agentsMap);

  if (onlyCriticalRisk) {
    agentsList = agentsList.filter(agent => {
      const isActive = agent.lastMonthStatus.includes('ACTIVO');
      return isActive && hasLastThreeLowMonths(agent.monthsData);
    });
  } else if (onlyConsistentGreen) {
    agentsList = agentsList.filter(agent => {
      const isActive = agent.lastMonthStatus.includes('ACTIVO');
      return isActive && hasTwoConsecutiveGreenMonths(agent.monthsData);
    });
  } else if (onlyRegularPerformers) {
    agentsList = agentsList.filter(agent => 
      !hasLastThreeLowMonths(agent.monthsData) && 
      !hasTwoConsecutiveGreenMonths(agent.monthsData)
    );
  }

  if (agentsList.length === 0) {
    let emptyMessage = 'No hay datos disponibles con los filtros seleccionados.';
    if (onlyCriticalRisk) {
      emptyMessage = '⚠️ No hay ningún Promotor ACTIVO en Riesgo Crítico (3 meses seguidos < 50%) con los filtros aplicados.';
    } else if (onlyConsistentGreen) {
      emptyMessage = '🌟 No hay ningún Promotor con 2 meses consecutivos en verde (≥ 90%) con los filtros aplicados.';
    } else if (onlyRegularPerformers) {
      emptyMessage = '📊 No hay ningún Promotor en categoría Regular con los filtros aplicados.';
    }
    const totalCols = (monthsToDisplay.length * 2) + 1;
    tbody.innerHTML = `<tr><td colspan="${totalCols}" style="text-align:center; padding: 20px; font-weight: bold; color: #555;">${emptyMessage}</td></tr>`;
    return;
  }

  if (currentSort.column) {
    const colKey = currentSort.column;
    const isAsc = currentSort.isAsc;

    agentsList.sort((a, b) => {
      if (colKey === 'PROMOTOR') {
        const valA = a.agentName.toLowerCase();
        const valB = b.agentName.toLowerCase();
        if (valA < valB) return isAsc ? -1 : 1;
        if (valA > valB) return isAsc ? 1 : -1;
        return 0;
      } else if (colKey.startsWith('cierre_')) {
        const month = colKey.replace('cierre_', '');
        const valA = a.monthsData[month] ? a.monthsData[month].cierre : 0;
        const valB = b.monthsData[month] ? b.monthsData[month].cierre : 0;
        return isAsc ? valA - valB : valB - valA;
      } else if (colKey.startsWith('cumplimiento_')) {
        const month = colKey.replace('cumplimiento_', '');
        const valA = a.monthsData[month] ? parseNum(a.monthsData[month].cumplimiento) : 0;
        const valB = b.monthsData[month] ? parseNum(b.monthsData[month].cumplimiento) : 0;
        return isAsc ? valA - valB : valB - valA;
      }
      return 0;
    });
  }

  agentsList.forEach((agent) => {
    const tr = document.createElement('tr');
    let rowHTML = `<td><strong>${agent.agentName}</strong></td>`;

    monthsToDisplay.forEach(m => {
      const monthRecord = agent.monthsData[m];

      if (monthRecord) {
        const cierre = monthRecord.cierre;
        const cumplHTML = getComplianceBadge(monthRecord.cumplimiento);
        rowHTML += `<td style="text-align:center;">${cierre}</td>`;
        rowHTML += `<td style="text-align:center;">${cumplHTML}</td>`;
      } else {
        rowHTML += `<td style="text-align:center; color: #999;">-</td>`;
        rowHTML += `<td style="text-align:center; color: #999;">-</td>`;
      }
    });

    tr.innerHTML = rowHTML;
    tbody.appendChild(tr);
  });
}

function renderLeadersTables(data) {
  renderGroupedTable(data, 'TRAINER', '#trainers-table tbody', 'trainers-table');
  renderGroupedTable(data, 'SUPERVISOR', '#supervisors-table tbody', 'supervisors-table');
  renderGroupedTable(data, 'COORDINADOR', '#coordinators-table tbody', 'coordinators-table');
}

function renderGroupedTable(data, groupKey, selector, tableId) {
  const tbody = document.querySelector(selector);
  if (!tbody) return;
  tbody.innerHTML = '';

  if (!data || data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="12" style="text-align:center;">No hay datos disponibles.</td></tr>';
    return;
  }

  const groupMap = {};

  data.forEach(row => {
    const rawLeader = getRowValue(row, groupKey);
    const leader = rawLeader ? rawLeader.trim() : `Sin ${groupKey.toLowerCase()}`;
    const agentName = getRowValue(row, 'PROMOTOR');

    if (!groupMap[leader]) {
      groupMap[leader] = {
        leader: leader,
        recordsCount: 0,
        uniqueAgentsSet: new Set(),
        metaTotal: 0,
        v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
        cierre: 0,
        compliancePct: 0
      };
    }

    groupMap[leader].recordsCount += 1;
    if (agentName) {
      groupMap[leader].uniqueAgentsSet.add(agentName.toUpperCase());
    }

    groupMap[leader].metaTotal += parseNum(getRowValue(row, 'META'));
    groupMap[leader].v1 += parseNum(getRowValue(row, 'V1'));
    groupMap[leader].v2 += parseNum(getRowValue(row, 'V2'));
    groupMap[leader].v3 += parseNum(getRowValue(row, 'V3'));
    groupMap[leader].v4 += parseNum(getRowValue(row, 'V4'));
    groupMap[leader].v5 += parseNum(getRowValue(row, 'V5'));
    groupMap[leader].cierre += parseNum(getRowValue(row, 'CIERRE'));
  });

  let leadersList = Object.values(groupMap);

  leadersList.forEach(l => {
    l.compliancePct = l.metaTotal > 0 ? ((l.cierre / l.metaTotal) * 100) : 0;
  });

  const sortInfo = sortState[tableId];
  if (sortInfo && sortInfo.column) {
    const col = sortInfo.column;
    const isAsc = sortInfo.isAsc;

    leadersList.sort((a, b) => {
      let valA = col === 'uniqueAgentsCount' ? a.uniqueAgentsSet.size : a[col];
      let valB = col === 'uniqueAgentsCount' ? b.uniqueAgentsSet.size : b[col];

      if (typeof valA === 'number' && typeof valB === 'number') {
        return isAsc ? valA - valB : valB - valA;
      }

      valA = valA ? valA.toString().toLowerCase() : '';
      valB = valB ? valB.toString().toLowerCase() : '';

      if (valA < valB) return isAsc ? -1 : 1;
      if (valA > valB) return isAsc ? 1 : -1;
      return 0;
    });
  }

  leadersList.forEach(l => {
    const complianceHTML = getComplianceBadge(l.compliancePct.toString());
    const uniqueAgentsCount = l.uniqueAgentsSet.size;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${l.leader}</strong></td>
      <td>${uniqueAgentsCount}</td>
      <td>${l.recordsCount}</td>
      <td>${l.metaTotal}</td>
      <td>${l.v1}</td>
      <td>${l.v2}</td>
      <td>${l.v3}</td>
      <td>${l.v4}</td>
      <td>${l.v5}</td>
      <td><strong>${l.cierre}</strong></td>
      <td>${complianceHTML}</td>
    `;
    tbody.appendChild(tr);
  });
}

function updateFilterButtonsUI() {
  document.getElementById('btn-critical-risk')?.classList.toggle('active', onlyCriticalRisk);
  document.getElementById('btn-consistent-green')?.classList.toggle('active', onlyConsistentGreen);
  document.getElementById('btn-regular-performers')?.classList.toggle('active', onlyRegularPerformers);
}

function toggleCriticalRiskFilter() {
  onlyCriticalRisk = !onlyCriticalRisk;
  if (onlyCriticalRisk) {
    onlyConsistentGreen = false;
    onlyRegularPerformers = false;
  }
  updateFilterButtonsUI();
  renderAllTables();
}

function toggleConsistentGreenFilter() {
  onlyConsistentGreen = !onlyConsistentGreen;
  if (onlyConsistentGreen) {
    onlyCriticalRisk = false;
    onlyRegularPerformers = false;
  }
  updateFilterButtonsUI();
  renderAllTables();
}

function toggleRegularPerformersFilter() {
  onlyRegularPerformers = !onlyRegularPerformers;
  if (onlyRegularPerformers) {
    onlyCriticalRisk = false;
    onlyConsistentGreen = false;
  }
  updateFilterButtonsUI();
  renderAllTables();
}

function getScoreBadge(valueStr) {
  if (!valueStr || valueStr === '-' || valueStr.trim() === '') return '-';
  
  let num = parseNum(valueStr);
  let colorClass = 'red';
  
  if (num >= 90) {
    colorClass = 'green';
  } else if (num >= 50) {
    colorClass = 'yellow';
  }

  return `<span class="score-badge ${colorClass}">${num.toFixed(1)}%</span>`;
}

function renderQualityScatterPlot(data) {
  const canvas = document.getElementById('chartQualityVsPerformance');
  if (!canvas) return;

  const validData = data.filter(row => {
    const nota = getRowValue(row, 'NOTA FINAL');
    const cumpl = getRowValue(row, 'CUMPLIMIENTO MES');
    return nota && nota !== '-' && cumpl && cumpl !== '-';
  });

  if (validData.length === 0) {
    if (scatterChartInstance) scatterChartInstance.destroy();
    return;
  }

  const scatterPoints = validData.map(row => ({
    x: parseNum(getRowValue(row, 'NOTA FINAL')),
    y: parseNum(getRowValue(row, 'CUMPLIMIENTO MES')),
    agent: getRowValue(row, 'PROMOTOR') || 'Agente'
  }));

  if (scatterChartInstance) {
    scatterChartInstance.destroy();
  }

  const ctx = canvas.getContext('2d');
  scatterChartInstance = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Agentes',
        data: scatterPoints,
        backgroundColor: 'rgba(37, 99, 235, 0.7)',
        borderColor: '#1d4ed8',
        borderWidth: 1,
        pointRadius: 6,
        pointHoverRadius: 9
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => {
              const pt = context.raw;
              return `${pt.agent}: Calidad = ${pt.x}% | Cumplimiento = ${pt.y}%`;
            }
          }
        },
        annotation: {
          annotations: {
            lineMeta: {
              type: 'line',
              yMin: 90,
              yMax: 90,
              borderColor: '#ff4444',
              borderWidth: 2,
              borderDash: [6, 6],
              label: {
                display: true,
                content: 'Meta Ventas (90%)',
                position: 'start',
                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                color: '#fff',
                font: { size: 10, weight: 'bold' }
              }
            },
            lineCalidad: {
              type: 'line',
              xMin: 90,
              xMax: 90,
              borderColor: '#ff4444',
              borderWidth: 2,
              borderDash: [6, 6],
              label: {
                display: true,
                content: 'Meta Calidad (90%)',
                position: 'start',
                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                color: '#fff',
                font: { size: 10, weight: 'bold' }
              }
            }
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Nota Final de Calidad (%)', font: { weight: 'bold' } },
          min: 0,
          max: 100
        },
        y: {
          title: { display: true, text: '% Cumplimiento de Meta', font: { weight: 'bold' } },
          beginAtZero: true
        }
      }
    }
  });
}

function renderDiagnosticTable(data) {
  const tbody = document.querySelector('#diagnostic-table tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (!data || data.length === 0) {
    renderQualityScatterPlot([]); 
    tbody.innerHTML = '<tr><td colspan="10" style="text-align:center;">No hay datos disponibles.</td></tr>';
    return;
  }

  renderQualityScatterPlot(data);

  const columns = [
    'NOTA HABILIDADES COMUNICATIVAS',
    'NOTA SONDEO',
    'NOTA PERSONALIZACIÓN',
    'NOTA MANEJO DE OBJECIONES',
    'NOTA CIERRE',
    'NOTA FINAL'
  ];

  let diagnosticAgents = data.filter(row => {
    return columns.some(col => {
      const val = getRowValue(row, col);
      return val && val !== '-' && val.trim() !== '';
    });
  });

  if (diagnosticAgents.length === 0) {
    tbody.innerHTML = '<tr><td colspan="10" style="text-align:center; padding: 20px;">No se encontraron agentes con evaluaciones de diagnóstico registradas.</td></tr>';
    return;
  }

  const sortInfo = sortState['diagnostic-table'];
  if (sortInfo && sortInfo.column) {
    const col = sortInfo.column;
    const isAsc = sortInfo.isAsc;

    diagnosticAgents.sort((a, b) => {
      let valA = col === '_MES_ORIGEN' ? (a._MES_ORIGEN || '') : getRowValue(a, col);
      let valB = col === '_MES_ORIGEN' ? (b._MES_ORIGEN || '') : getRowValue(b, col);

      if (col !== 'PROMOTOR' && col !== '_MES_ORIGEN') {
        let numA = parseNum(valA);
        let numB = parseNum(valB);
        return isAsc ? numA - numB : numB - numA;
      }

      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
      if (valA < valB) return isAsc ? -1 : 1;
      if (valA > valB) return isAsc ? 1 : -1;
      return 0;
    });
  }

  diagnosticAgents.forEach(row => {
    const agent = getRowValue(row, 'PROMOTOR') || '-';
    
    const rawMes = row._MES_ORIGEN || '';
    const mesFormatted = rawMes ? (rawMes.charAt(0).toUpperCase() + rawMes.slice(1)) : '-';
    
    const habCom = getScoreBadge(getRowValue(row, 'NOTA HABILIDADES COMUNICATIVAS'));
    const sondeo = getScoreBadge(getRowValue(row, 'NOTA SONDEO'));
    const pers = getScoreBadge(getRowValue(row, 'NOTA PERSONALIZACIÓN'));
    const objeciones = getScoreBadge(getRowValue(row, 'NOTA MANEJO DE OBJECIONES'));
    const cierreNota = getScoreBadge(getRowValue(row, 'NOTA CIERRE'));
    const finalScore = getScoreBadge(getRowValue(row, 'NOTA FINAL'));

    const cierreVentasVal = getRowValue(row, 'CIERRE');
    const cierreVentasDisplay = cierreVentasVal !== '' ? cierreVentasVal : '0';

    const complianceVal = getRowValue(row, 'CUMPLIMIENTO MES');
    const complianceHTML = getComplianceBadge(complianceVal);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${agent}</strong></td>
      <td><span style="background: #e2e8f0; color: #334155; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 0.85em;">${mesFormatted}</span></td>
      <td style="text-align:center;">${habCom}</td>
      <td style="text-align:center;">${sondeo}</td>
      <td style="text-align:center;">${pers}</td>
      <td style="text-align:center;">${objeciones}</td>
      <td style="text-align:center;">${cierreNota}</td>
      <td style="text-align:center;"><strong>${finalScore}</strong></td>
      <td style="text-align:center;"><strong>${cierreVentasDisplay}</strong></td>
      <td style="text-align:center;">${complianceHTML}</td>
    `;
    tbody.appendChild(tr);
  });
}

function switchSubTab(subTabName, evt) {
  document.querySelectorAll('#tab-trends .subtab-content').forEach(el => {
    el.style.display = 'none';
  });

  document.querySelectorAll('#tab-trends .subtab-button').forEach(btn => {
    btn.classList.remove('active');
  });

  const targetSubTab = document.getElementById(`subtab-${subTabName}`);
  if (targetSubTab) {
    targetSubTab.style.display = 'block';
  }

  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add('active');
  }

  if (subTabName === 'trends-leader') {
    renderTrendsLeaderTable();
  } else if (subTabName === 'trends-global') {
    renderTrendsGlobalTable();
  }
}

function renderTrendsLeaderTable() {
  const container = document.getElementById('subtab-trends-leader');
  if (!container) return;

  const monthKeys = Object.keys(allMonthsData);
  if (monthKeys.length === 0) return;

  const labels = monthKeys.map(m => m.charAt(0).toUpperCase() + m.slice(1));
  const supervisorsVentasMap = {};
  const supervisorsMetaMap = {};
  const supervisorsPromotoresMap = {};

  monthKeys.forEach(m => {
    (allMonthsData[m] || []).forEach(row => {
      if (filterRow(row)) {
        const sup = getRowValue(row, 'SUPERVISOR');
        if (sup) {
          if (!supervisorsVentasMap[sup]) supervisorsVentasMap[sup] = {};
          if (!supervisorsMetaMap[sup]) supervisorsMetaMap[sup] = {};
          if (!supervisorsPromotoresMap[sup]) supervisorsPromotoresMap[sup] = {};
        }
      }
    });
  });

  Object.keys(supervisorsVentasMap).forEach(sup => {
    monthKeys.forEach(m => {
      const rows = (allMonthsData[m] || []).filter(r => getRowValue(r, 'SUPERVISOR') === sup && filterRow(r));
      
      const totalCierre = rows.reduce((sum, r) => sum + parseNum(getRowValue(r, 'CIERRE')), 0);
      const totalMeta = rows.reduce((sum, r) => sum + parseNum(getRowValue(r, 'META')), 0);
      
      supervisorsVentasMap[sup][m] = totalCierre;
      supervisorsMetaMap[sup][m] = totalMeta;

      const uniquePromotores = new Set(rows.map(r => getRowValue(r, 'PROMOTOR')).filter(Boolean));
      supervisorsPromotoresMap[sup][m] = uniquePromotores.size;
    });
  });

  const datasetsCumplimiento = Object.keys(supervisorsVentasMap).map((sup, idx) => {
    const color = SUPERVISOR_COLORS[idx % SUPERVISOR_COLORS.length];
    
    const dataCumpl = monthKeys.map(m => {
      const meta = supervisorsMetaMap[sup][m] || 0;
      const cierre = supervisorsVentasMap[sup][m] || 0;
      return meta > 0 ? parseFloat(((cierre / meta) * 100).toFixed(1)) : 0;
    });

    return {
      label: sup,
      data: dataCumpl,
      borderColor: color,
      backgroundColor: color,
      borderWidth: 2.5,
      tension: 0.3,
      fill: false,
      pointRadius: 4,
      pointHoverRadius: 7
    };
  });

  let canvasCumpl = document.getElementById('chartCumplimientoPorLider');
  if (canvasCumpl) {
    let existingChart = Chart.getChart(canvasCumpl);
    if (existingChart) existingChart.destroy();

    new Chart(canvasCumpl.getContext('2d'), {
      type: 'line',
      data: { labels, datasets: datasetsCumplimiento },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '% Cumplimiento Promedio por Supervisor y por Mes',
            font: { size: 16, weight: 'bold' },
            color: '#2c3e50',
            padding: { top: 10, bottom: 20 }
          },
          legend: { 
            position: 'bottom',
            labels: { boxWidth: 12, padding: 15 }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: (context) => `${context.dataset.label}: ${context.raw}%`
            }
          },
          annotation: {
            annotations: {
              metaLine: {
                type: 'line',
                yMin: 100,
                yMax: 100,
                borderColor: '#ef4444',
                borderWidth: 2,
                borderDash: [6, 6],
                label: {
                  display: true,
                  content: 'Meta (100%)',
                  position: 'end',
                  backgroundColor: 'rgba(239, 68, 68, 0.8)',
                  color: '#fff',
                  font: { size: 10, weight: 'bold' }
                }
              }
            }
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: { 
            beginAtZero: true,
            title: { display: true, text: 'Porcentaje de Cumplimiento (%)' },
            ticks: {
              callback: (value) => `${value}%`
            }
          }
        }
      }
    });
  }

  const datasetsVentas = Object.keys(supervisorsVentasMap).map((sup, idx) => {
    const color = SUPERVISOR_COLORS[idx % SUPERVISOR_COLORS.length];
    return {
      label: sup,
      data: monthKeys.map(m => supervisorsVentasMap[sup][m] || 0),
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
      borderRadius: 4
    };
  });

  const datasetsPromotores = Object.keys(supervisorsPromotoresMap).map((sup, idx) => {
    const color = SUPERVISOR_COLORS[idx % SUPERVISOR_COLORS.length];
    return {
      label: sup,
      data: monthKeys.map(m => supervisorsPromotoresMap[sup][m] || 0),
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
      borderRadius: 4
    };
  });

  let canvasPromotores = document.getElementById('chartPromotoresPorLider');
  if (canvasPromotores) {
    let existingChartProm = Chart.getChart(canvasPromotores);
    if (existingChartProm) existingChartProm.destroy();

    new Chart(canvasPromotores.getContext('2d'), {
      type: 'bar',
      data: { labels, datasets: datasetsPromotores },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Cantidad de Promotores Asignados por Supervisor y por Mes',
            font: { size: 16, weight: 'bold' },
            color: '#2c3e50',
            padding: { top: 10, bottom: 20 }
          },
          legend: { 
            position: 'bottom',
            labels: { boxWidth: 12, padding: 15 }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: { 
            beginAtZero: true,
            ticks: { stepSize: 1 },
            title: { display: true, text: 'Cantidad de Promotores' }
          }
        }
      }
    });
  }

  let canvasVentas = document.getElementById('chartAgentesPorLider');
  if (canvasVentas) {
    let existingChartVentas = Chart.getChart(canvasVentas);
    if (existingChartVentas) existingChartVentas.destroy();

    new Chart(canvasVentas.getContext('2d'), {
      type: 'bar',
      data: { labels, datasets: datasetsVentas },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Cantidad de Ventas por Supervisor y por Mes',
            font: { size: 16, weight: 'bold' },
            color: '#2c3e50',
            padding: { top: 10, bottom: 20 }
          },
          legend: { 
            position: 'bottom',
            labels: { boxWidth: 12, padding: 15 }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: { 
            beginAtZero: true,
            title: { display: true, text: 'Ventas Totales' }
          }
        }
      }
    });
  }
}

function renderHeaderSummary() {
  const monthKeys = Object.keys(allMonthsData);
  if (monthKeys.length === 0) return;

  const lastMonthKey = monthKeys[monthKeys.length - 1];
  const lastMonthData = allMonthsData[lastMonthKey] || [];
  const lastMonthFormatted = lastMonthKey.charAt(0).toUpperCase() + lastMonthKey.slice(1);

  const activeAgentsLastMonth = new Set(
    lastMonthData
      .filter(row => {
        const status = getRowValue(row, 'STATUS AGENTE').toUpperCase();
        return status.includes('ACTIVO');
      })
      .map(row => getRowValue(row, 'PROMOTOR').toUpperCase())
      .filter(name => name && name.trim() !== '')
  );

  const totalActive = activeAgentsLastMonth.size;

  let sumCompliance = 0;
  let countCompliance = 0;

  lastMonthData.forEach(row => {
    const cumplVal = getRowValue(row, 'CUMPLIMIENTO MES');
    if (cumplVal && cumplVal !== '-' && cumplVal.trim() !== '') {
      const numVal = parseNum(cumplVal);
      if (!isNaN(numVal)) {
        sumCompliance += numVal;
        countCompliance++;
      }
    }
  });

  const avgCompliance = countCompliance > 0 ? (sumCompliance / countCompliance).toFixed(1) : '0.0';

  const fullAgentsMap = {};
  Object.keys(allMonthsData).forEach(m => {
    allMonthsData[m].forEach(row => {
      const agentName = getRowValue(row, 'PROMOTOR').toUpperCase();
      if (!agentName) return;

      if (!fullAgentsMap[agentName]) {
        fullAgentsMap[agentName] = { agentName: agentName, monthsData: {} };
      }
      fullAgentsMap[agentName].monthsData[m] = {
        cierre: parseNum(getRowValue(row, 'CIERRE')),
        cumplimiento: getRowValue(row, 'CUMPLIMIENTO MES') || '-'
      };
    });
  });

  let countCriticalRisk = 0;
  let countConsistentGreen = 0;

  activeAgentsLastMonth.forEach(agentName => {
    const agentObj = fullAgentsMap[agentName];
    if (agentObj) {
      if (hasLastThreeLowMonths(agentObj.monthsData)) {
        countCriticalRisk++;
      }
      if (hasTwoConsecutiveGreenMonths(agentObj.monthsData)) {
        countConsistentGreen++;
      }
    }
  });

  let sumDiagnostic = 0;
  let countDiagnostic = 0;

  lastMonthData.forEach(row => {
    const finalNote = getRowValue(row, 'NOTA FINAL');
    if (finalNote && finalNote !== '-' && finalNote.trim() !== '') {
      const numVal = parseNum(finalNote);
      if (!isNaN(numVal) && numVal > 0) {
        sumDiagnostic += numVal;
        countDiagnostic++;
      }
    }
  });

  const avgQuality = countDiagnostic > 0 ? (sumDiagnostic / countDiagnostic).toFixed(1) : '0.0';

  const elActive = document.getElementById('kpi-active-agents');
  const elActiveMonth = document.getElementById('kpi-active-month');
  const elCompliance = document.getElementById('kpi-avg-compliance');
  const elRisk = document.getElementById('kpi-critical-risk');
  const elGreen = document.getElementById('kpi-consistent-green');
  const elQuality = document.getElementById('kpi-avg-quality');

  if (elActive) elActive.textContent = totalActive;
  if (elActiveMonth) elActiveMonth.textContent = `Mes: ${lastMonthFormatted} 2026`;
  if (elCompliance) elCompliance.textContent = `${avgCompliance}%`;
  if (elRisk) elRisk.textContent = countCriticalRisk;
  if (elGreen) elGreen.textContent = countConsistentGreen;
  if (elQuality) elQuality.textContent = `${avgQuality}%`;
}

function renderTrendsGlobalTable() {
  const container = document.getElementById('subtab-trends-global');
  if (!container) return;

  const monthKeys = Object.keys(allMonthsData);
  if (monthKeys.length === 0) return;

  const labels = monthKeys.map(m => m.charAt(0).toUpperCase() + m.slice(1));
  const totalVentas = [];
  const totalMeta = [];
  const semanasAcumuladas = { V1: 0, V2: 0, V3: 0, V4: 0, V5: 0 };
  const semaforoPorMes = { rojo: [], amarillo: [], verde: [] };

  monthKeys.forEach(m => {
    const rawRows = allMonthsData[m] || [];
    const rows = rawRows.filter(row => filterRow(row));

    const ventas = rows.reduce((sum, r) => sum + parseNum(getRowValue(r, 'CIERRE')), 0);
    const meta = rows.reduce((sum, r) => sum + parseNum(getRowValue(r, 'META')), 0);
    totalVentas.push(ventas);
    totalMeta.push(meta);

    ['V1', 'V2', 'V3', 'V4', 'V5'].forEach(vKey => {
      const sumaSemana = rows.reduce((sum, r) => sum + parseNum(getRowValue(r, vKey)), 0);
      semanasAcumuladas[vKey] += sumaSemana;
    });

    let cRojo = 0, cAmarillo = 0, cVerde = 0;
    rows.forEach(r => {
      const v = parseNum(getRowValue(r, 'CIERRE'));
      const me = parseNum(getRowValue(r, 'META'));
      const pct = me > 0 ? (v / me) * 100 : 0;

      if (pct < 50) cRojo++;
      else if (pct < 90) cAmarillo++;
      else cVerde++;
    });

    semaforoPorMes.rojo.push(cRojo);
    semaforoPorMes.amarillo.push(cAmarillo);
    semaforoPorMes.verde.push(cVerde);
  });

  let canvasGlobal = document.getElementById('chartGlobalVentas');
  if (canvasGlobal) {
    let existingChart = Chart.getChart(canvasGlobal);
    if (existingChart) existingChart.destroy();

    new Chart(canvasGlobal.getContext('2d'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          { label: 'Ventas Totales', data: totalVentas, backgroundColor: '#10b981', borderRadius: 4 },
          { label: 'Meta Total', data: totalMeta, backgroundColor: '#ff4444', borderRadius: 4 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: { display: true, text: 'Rendimiento Global de Ventas vs. Meta General por Mes', font: { size: 16, weight: 'bold' } },
          legend: { position: 'bottom' }
        },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  let canvasSemanas = document.getElementById('chartGlobalSemanas');
  if (canvasSemanas) {
    let existingChart = Chart.getChart(canvasSemanas);
    if (existingChart) existingChart.destroy();

    new Chart(canvasSemanas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Semana 1 (V1)', 'Semana 2 (V2)', 'Semana 3 (V3)', 'Semana 4 (V4)', 'Semana 5 (V5)'],
        datasets: [{
          label: 'Ventas Acumuladas',
          data: [semanasAcumuladas.V1, semanasAcumuladas.V2, semanasAcumuladas.V3, semanasAcumuladas.V4, semanasAcumuladas.V5],
          backgroundColor: '#3b82f6',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: { display: true, text: 'Distribución Acumulada de Ventas por Semana (V1 a V5)', font: { size: 16, weight: 'bold' } },
          legend: { position: 'bottom' }
        },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  let canvasSemaforo = document.getElementById('chartGlobalSemaforo');
  if (canvasSemaforo) {
    let existingChart = Chart.getChart(canvasSemaforo);
    if (existingChart) existingChart.destroy();

    new Chart(canvasSemaforo.getContext('2d'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          { label: 'Rojo (<50%)', data: semaforoPorMes.rojo, backgroundColor: '#ff4d4d' },
          { label: 'Amarillo (50%-89%)', data: semaforoPorMes.amarillo, backgroundColor: '#ffc107' },
          { label: 'Verde (>=90%)', data: semaforoPorMes.verde, backgroundColor: '#00c853' }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: { display: true, text: 'SEMÁFORO GLOBAL POR MES', font: { size: 16, weight: 'bold' } },
          legend: { position: 'bottom' }
        },
        scales: {
          x: { stacked: true },
          y: { stacked: true, beginAtZero: true }
        }
      }
    });
  }
}

function getCountryAggregatedData(data) {
  const countryMap = {};

  data.forEach(row => {
    const pais = row._PAIS_ORIGEN || 'Sin País';
    const cierre = parseNum(getRowValue(row, 'CIERRE'));
    const meta = parseNum(getRowValue(row, 'META'));
    const notaFinal = parseNum(getRowValue(row, 'NOTA FINAL'));

    if (!countryMap[pais]) {
      countryMap[pais] = {
        pais: pais,
        totalAgentes: 0,
        lowPerfCount: 0,
        metaTotal: 0,
        cierreTotal: 0,
        sumCalidad: 0,
        countCalidad: 0
      };
    }

    countryMap[pais].totalAgentes += 1;
    countryMap[pais].metaTotal += meta;
    countryMap[pais].cierreTotal += cierre;

    const cumplimientoInd = meta > 0 ? (cierre / meta) * 100 : 0;
    if (cumplimientoInd < 50) {
      countryMap[pais].lowPerfCount += 1;
    }

    if (notaFinal > 0) {
      countryMap[pais].sumCalidad += notaFinal;
      countryMap[pais].countCalidad += 1;
    }
  });

  return Object.values(countryMap).map(c => ({
    ...c,
    cumplimientoPct: c.metaTotal > 0 ? ((c.cierreTotal / c.metaTotal) * 100) : 0,
    pctLowPerf: c.totalAgentes > 0 ? ((c.lowPerfCount / c.totalAgentes) * 100) : 0,
    promedioCalidad: c.countCalidad > 0 ? (c.sumCalidad / c.countCalidad) : 0
  }));
}

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
    doc.text(`Reporte Dashboard (${selectedCountry}): ${tabTitle}`, 14, 12);

    const filterElements = document.querySelectorAll('.filters-grid select, .filters-grid input');
    const activeFilters = [];

    filterElements.forEach(el => {
      let labelText = el.previousElementSibling?.textContent?.replace(':', '').trim() 
                   || el.getAttribute('placeholder') 
                   || el.id;
      let valueText = el.value ? el.value.trim() : '';
      if (el.tagName === 'SELECT' && el.selectedIndex >= 0) {
        valueText = el.options[el.selectedIndex].text.trim();
      }
      if (valueText && valueText !== '') {
        activeFilters.push(`${labelText}: ${valueText}`);
      }
    });

    if (typeof onlyCriticalRisk !== 'undefined' && onlyCriticalRisk) activeFilters.push('Foco: Riesgo Crítico');
    if (typeof onlyConsistentGreen !== 'undefined' && onlyConsistentGreen) activeFilters.push('Foco: 2 Meses Verde');
    if (typeof onlyRegularPerformers !== 'undefined' && onlyRegularPerformers) activeFilters.push('Foco: Agentes Regulares');

    doc.setFontSize(8);
    doc.setTextColor(80);
    const filterString = activeFilters.length > 0 
      ? `Filtros aplicados: ${activeFilters.join('  |  ')}` 
      : 'Filtros aplicados: Ninguno (Todos los datos)';
    
    const splitFilters = doc.splitTextToSize(filterString, pdfWidth);
    doc.text(splitFilters, 14, 17);

    let currentY = 17 + (splitFilters.length * 4) + 4;

    const selector = [
      '.chart-card', 
      '.agent-trend-card', 
      '.agent-session-card', 
      '.summary-cards-grid'
    ].join(', ');

    const visualBlocks = Array.from(activeTabContainer.querySelectorAll(selector));

    for (let i = 0; i < visualBlocks.length; i++) {
      const block = visualBlocks[i];
      if (block.offsetWidth === 0 || block.offsetHeight === 0) continue;

      block.scrollIntoView({ block: 'center' });
      await new Promise(resolve => setTimeout(resolve, 150));

      const canvas = await html2canvas(block, { 
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        logging: false,
        scrollX: 0,
        scrollY: 0,
        width: block.scrollWidth,
        height: block.scrollHeight
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pxToMm = 0.264583;
      let finalWidth = (canvas.width / 2) * pxToMm;
      let finalHeight = (canvas.height / 2) * pxToMm;

      if (finalWidth > pdfWidth) {
        const widthRatio = pdfWidth / finalWidth;
        finalWidth = pdfWidth;
        finalHeight = finalHeight * widthRatio;
      }

      const maxHeight = pageHeight - 20;
      if (finalHeight > maxHeight) {
        const heightRatio = maxHeight / finalHeight;
        finalHeight = maxHeight;
        finalWidth = finalWidth * heightRatio;
      }

      if (currentY + finalHeight > pageHeight) {
        doc.addPage();
        currentY = 15;
      }

      const xPosition = 14 + ((pdfWidth - finalWidth) / 2);
      doc.addImage(imgData, 'PNG', xPosition, currentY, finalWidth, finalHeight);
      currentY += finalHeight + 8;
    }

    const tablesInActiveTab = activeTabContainer.querySelectorAll('table');

    if (tablesInActiveTab.length > 0) {
      tablesInActiveTab.forEach((tableEl) => {
        if (currentY > 150) {
          doc.addPage();
          currentY = 15;
        }

        const tableTitle = tableEl.previousElementSibling?.tagName.startsWith('H') 
          ? tableEl.previousElementSibling.textContent.trim() 
          : null;

        if (tableTitle) {
          doc.setFontSize(10);
          doc.setTextColor(30);
          doc.text(tableTitle, 14, currentY);
          currentY += 4;
        }

        doc.autoTable({
          html: tableEl,
          startY: currentY,
          theme: 'grid',
          styles: { fontSize: 7, cellPadding: 1.5, halign: 'center', valign: 'middle' },
          headStyles: { fillColor: [6, 183, 6], textColor: [255, 255, 255], fontStyle: 'bold' },
          didParseCell: function(data) {
            if (data.cell.raw) {
              const rawHtml = typeof data.cell.raw === 'string' 
                ? data.cell.raw 
                : (data.cell.raw.innerHTML || '');

              if (rawHtml.includes('active-month-badge')) {
                data.cell._isActiveMonthCell = true;
                data.cell._rawHtml = rawHtml;
              } else if (rawHtml.includes('%') || rawHtml.includes('badge') || rawHtml.includes('nota')) {
                data.cell._isScoreBadge = true;
                data.cell._rawHtml = rawHtml;
              }

              if (typeof data.cell.raw === 'string' || data.cell.raw.innerHTML) {
                const cleanText = (data.cell.raw.textContent || data.cell.raw.replace(/<[^>]*>/g, '')).trim();
                data.cell.text = [cleanText];
              }
            }
          },
          willDrawCell: function(data) {
            if (data.section === 'body' && (data.cell._isActiveMonthCell || data.cell._isScoreBadge)) {
              data.cell.text = [];
            }
          },
          didDrawCell: function(data) {
            if (data.section === 'body') {
              const rawHtml = data.cell._rawHtml || (data.cell.raw ? (data.cell.raw.outerHTML || data.cell.raw.innerHTML || '') : '');

              if (data.cell._isScoreBadge) {
                const text = (data.cell.raw.textContent || data.cell.raw.replace(/<[^>]*>/g, '')).trim();
                const val = parseFloat(text.replace('%', ''));

                let fill = [226, 232, 240], border = [204, 204, 204], textCol = [51, 51, 51]; 

                if (rawHtml.includes('green') || val >= 90) {
                  fill = [209, 250, 229]; border = [6, 183, 6]; textCol = [6, 95, 70];
                } else if (rawHtml.includes('yellow') || rawHtml.includes('orange') || (val >= 50 && val < 90)) {
                  fill = [254, 243, 199]; border = [255, 185, 55]; textCol = [146, 64, 14];
                } else if (rawHtml.includes('red') || (val < 50 && !isNaN(val))) {
                  fill = [254, 226, 226]; border = [255, 68, 68]; textCol = [153, 27, 27];
                }

                doc.setFont(data.cell.styles.font || 'helvetica', 'bold');
                doc.setFontSize(6.5);

                const textWidth = doc.getTextWidth(text);
                const badgeWidth = textWidth + 4;
                const badgeHeight = 4.2;
                const badgeX = data.cell.x + (data.cell.width - badgeWidth) / 2;
                const badgeY = data.cell.y + (data.cell.height - badgeHeight) / 2;

                doc.setFillColor(fill[0], fill[1], fill[2]);
                doc.setDrawColor(border[0], border[1], border[2]);
                doc.setLineWidth(0.2);
                doc.roundedRect(badgeX, badgeY, badgeWidth, badgeHeight, 1.8, 1.8, 'FD');

                doc.setTextColor(textCol[0], textCol[1], textCol[2]);
                doc.text(text, data.cell.x + (data.cell.width / 2), badgeY + 3, { align: 'center' });
                return;
              }

              if (data.cell._isActiveMonthCell) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = rawHtml;

                const items = [];
                tempDiv.childNodes.forEach(node => {
                  if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('active-month-badge')) {
                    const txt = node.textContent.trim();
                    if (txt) items.push({ text: txt, isActive: true });
                  } else if (node.nodeType === Node.TEXT_NODE) {
                    const textStr = node.textContent;
                    const partsStr = textStr.split(',');
                    partsStr.forEach(p => {
                      const trimmed = p.trim();
                      if (trimmed) {
                        items.push({ text: trimmed, isActive: false });
                      }
                    });
                  }
                });

                if (items.length === 0) return;

                const availableWidth = data.cell.width - 2.0;
                const lines = [[]];
                let currentLineIdx = 0;
                let currentLineWidth = 0;

                items.forEach((item, idx) => {
                  const isLast = (idx === items.length - 1);
                  const labelWithComma = item.text + (isLast ? '' : ',');

                  doc.setFont('helvetica', item.isActive ? 'bold' : 'normal');
                  doc.setFontSize(5.5);

                  const pureTextWidth = doc.getTextWidth(item.text);
                  const textWidth = doc.getTextWidth(labelWithComma);
                  const itemWidth = item.isActive ? (pureTextWidth + 2.2 + (isLast ? 0 : doc.getTextWidth(','))) : textWidth;
                  const spacing = isLast ? 0 : 1.0;

                  if (lines[currentLineIdx].length > 0 && (currentLineWidth + itemWidth > availableWidth)) {
                    currentLineIdx++;
                    lines[currentLineIdx] = [];
                    currentLineWidth = 0;
                  }

                  lines[currentLineIdx].push({
                    text: item.text,
                    hasComma: !isLast,
                    isActive: item.isActive,
                    pureTextWidth: pureTextWidth,
                    textWidth: textWidth,
                    itemWidth: itemWidth
                  });

                  currentLineWidth += itemWidth + spacing;
                });

                const totalLines = lines.length;
                const lineHeight = 3.8;
                const startY = data.cell.y + Math.max(2.0, (data.cell.height - (totalLines * lineHeight)) / 2) + 2.2;

                lines.forEach((line, lineIdx) => {
                  const lineY = startY + (lineIdx * lineHeight);
                  
                  let lineTotalWidth = 0;
                  line.forEach((itemObj, i) => {
                    lineTotalWidth += itemObj.itemWidth + (i === line.length - 1 ? 0 : 1.0);
                  });

                  let currentX = data.cell.x + Math.max(1.0, (data.cell.width - lineTotalWidth) / 2);

                  line.forEach((itemObj) => {
                    if (itemObj.isActive) {
                      doc.setFont('helvetica', 'bold');
                      doc.setFontSize(5.5);

                      const badgeW = itemObj.pureTextWidth + 2.2;
                      const badgeH = 3.4;
                      const badgeY = lineY - 2.5;

                      doc.setFillColor(226, 232, 240);
                      doc.setDrawColor(203, 213, 225);
                      doc.setLineWidth(0.15);
                      doc.roundedRect(currentX, badgeY, badgeW, badgeH, 1.0, 1.0, 'FD');

                      doc.setTextColor(30, 41, 59);
                      doc.text(itemObj.text, currentX + (badgeW / 2), lineY, { align: 'center' });

                      currentX += badgeW;

                      if (itemObj.hasComma) {
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(71, 85, 105);
                        doc.text(',', currentX, lineY);
                        currentX += doc.getTextWidth(',') + 1.0;
                      } else {
                        currentX += 1.0;
                      }
                    } else {
                      const displayText = itemObj.text + (itemObj.hasComma ? ',' : '');
                      doc.setFont('helvetica', 'normal');
                      doc.setFontSize(5.5);
                      doc.setTextColor(71, 85, 105);
                      doc.text(displayText, currentX, lineY);

                      currentX += itemObj.itemWidth + 1.0;
                    }
                  });
                });
                return;
              }

              let fillColor = null;
              if (rawHtml.includes('dot-green')) fillColor = [6, 183, 6];
              else if (rawHtml.includes('dot-yellow')) fillColor = [255, 185, 55];
              else if (rawHtml.includes('dot-red')) fillColor = [255, 68, 68];
        
              if (fillColor) {
                doc.setFillColor(fillColor[0], fillColor[1], fillColor[2]);
                const posX = data.cell.x + data.cell.width - 4;
                const posY = data.cell.y + (data.cell.height / 2);
                doc.circle(posX, posY, 1.2, 'F');
              }
            }
          }
        });

        currentY = doc.lastAutoTable.finalY + 8;
      });
    }

    const filename = `Reporte_${selectedCountry}_${tabTitle.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.pdf`;
    doc.save(filename);

  } catch (error) {
    console.error('Error al exportar PDF:', error);
  } finally {
    btnExport.textContent = 'Exportar a PDF';
    btnExport.disabled = false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btnExport = document.getElementById('btn-export-pdf');
  if (btnExport) {
    btnExport.addEventListener('click', exportCurrentViewToPDF);
  }

  populateCountrySelector();
  populateMonthSelector();
  
  const searchInput = document.getElementById('filter-search');
  if (searchInput) {
    searchInput.addEventListener('input', filterData);
  }

  document.getElementById('filter-mes')?.addEventListener('change', loadDashboardData);
  document.getElementById('btn-reset')?.addEventListener('click', resetAllFilters);
  document.getElementById('filter-unassigned')?.addEventListener('change', filterData);
  
  preloadAllMonths();

  setInterval(() => {
    fetchCurrentMonthData();
  }, 120000);
});