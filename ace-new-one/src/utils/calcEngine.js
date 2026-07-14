/**
 * calcEngine.js
 * Core analytical algorithms for Advanced Solar ROI Calculator (MCDM)
 */

// 1. Inventory of Solar Panel products
export const products = [
  {
    id: "prod_1",
    brand: "Jinko Solar",
    model: "Tiger Neo N-type 440W",
    price: 1700000, // IDR per panel
    efficiency: 22.5, // %
    warranty: 15, // years
    techRating: 94, // technical suitability score (1-100)
    category: "premium",
    weight: 22, // kg
    isIndustrialOnly: false
  },
  {
    id: "prod_2",
    brand: "Trina Solar",
    model: "Vertex S+ 435W",
    price: 1950000,
    efficiency: 21.8,
    warranty: 25,
    techRating: 96,
    category: "premium",
    weight: 21.5,
    isIndustrialOnly: false
  },
  {
    id: "prod_3",
    brand: "Longi Solar",
    model: "Hi-MO 6 Explorer 430W",
    price: 1600000,
    efficiency: 22.0,
    warranty: 15,
    techRating: 91,
    category: "standard",
    weight: 20.8,
    isIndustrialOnly: false
  },
  {
    id: "prod_4",
    brand: "Canadian Solar",
    model: "BiHiKu7 650W",
    price: 2400000,
    efficiency: 21.2,
    warranty: 12,
    techRating: 88,
    category: "industrial",
    weight: 34.4, // heavy weight
    isIndustrialOnly: true
  },
  {
    id: "prod_5",
    brand: "EcoSolar",
    model: "Eco Green 400W",
    price: 1100000,
    efficiency: 19.5,
    warranty: 10,
    techRating: 75,
    category: "budget",
    weight: 20.0,
    isIndustrialOnly: false
  }
];

// 2. Rule-Based Calculation for PV Capacity
export function calculateCapacity(monthlyBill, roofArea, phaseLimitVa) {
  // Average tariff in Indonesia for R1/R2/R3 ~ Rp 1.444,70 to Rp 1.699,53 per kWh. Let's use Rp 1.500 per kWh
  const tariff = 1500;
  const monthlyKwh = monthlyBill / tariff;

  // Daily consumption kWh
  const dailyKwh = monthlyKwh / 30;

  // Average daily equivalent peak sun hours in Indonesia is about 4.0 hours
  const sunHours = 4.0;

  // System loss factor (temperature, inverter efficiency, wiring losses) ~ 15-20% (use 0.82 efficiency multiplier)
  const systemLossMultiplier = 0.82;

  // Target capacity in kWp to cover 100% of daily consumption
  const targetKwp = dailyKwh / (sunHours * systemLossMultiplier);

  // Limit 1: Rooftop area capacity limit
  // Standard solar panel is ~400W (0.4kWp) and takes about 2.0 m2 of space (including maintenance gaps). So ~0.2 kWp per m2
  const maxKwpFromRoof = roofArea * 0.18;

  // Limit 2: Grid phase/capacity limit (cannot exceed current contract capacity in VA)
  // Usually, solar capacity (kW) should be capped at around 100% or 120% of contract capacity (in kVA).
  const maxKwpFromGrid = (phaseLimitVa / 1000) * 1.2;

  // Suggested capacity is the minimum of target, roof area limit, and grid capacity limit
  const recommendedKwp = Math.min(targetKwp, maxKwpFromRoof, maxKwpFromGrid);

  // Recalculate annual production (kWh) and annual savings
  const annualGeneration = recommendedKwp * sunHours * 365 * systemLossMultiplier;
  const annualSavings = annualGeneration * tariff;

  // Estimate CO2 offset (standard grid emission factor in Indonesia is ~0.877 kg CO2 per kWh)
  const co2OffsetTons = (annualGeneration * 0.877) / 1000;

  return {
    targetKwp: parseFloat(targetKwp.toFixed(2)),
    recommendedKwp: parseFloat(recommendedKwp.toFixed(2)),
    maxKwpFromRoof: parseFloat(maxKwpFromRoof.toFixed(2)),
    maxKwpFromGrid: parseFloat(maxKwpFromGrid.toFixed(2)),
    annualGeneration: Math.round(annualGeneration),
    annualSavings: Math.round(annualSavings),
    co2OffsetTons: parseFloat(co2OffsetTons.toFixed(2))
  };
}

// 3. Constraint-Based Roof Validation
export function validateRoofConstraints(roofType, roofMaterial, slopeAngle, shadingPct) {
  const warnings = [];
  const status = {
    isValid: true,
    score: 100, // 0 - 100
    level: "SUCCESS" // SUCCESS, WARNING, DANGER
  };

  // Constraint 1: Material weight validation
  if (roofMaterial === "asbes") {
    warnings.push("Atap Asbes rapuh dan berisiko retak. Memerlukan rel pemasangan khusus penyangga beban di rangka utama.");
    status.score -= 20;
    status.level = "WARNING";
  }

  // Constraint 2: Slope angle constraints
  if (slopeAngle < 5) {
    warnings.push("Kemiringan atap sangat datar (< 5°). Risiko genangan air tinggi. Disarankan menaikkan sudut bracket panel minimal 10-15° untuk self-cleaning alami.");
    status.score -= 15;
    if (status.level !== "DANGER") status.level = "WARNING";
  } else if (slopeAngle > 45) {
    warnings.push("Kemiringan atap terlalu curam (> 45°). Sangat berbahaya bagi instalasi dan memerlukan sistem pengaman tambahan. Batas beban angin meningkat.");
    status.score -= 40;
    status.level = "DANGER";
    status.isValid = false;
  }

  // Constraint 3: Shading factors
  if (shadingPct > 30) {
    warnings.push(`Tingkat bayangan tinggi (${shadingPct}%). Sangat disarankan memasang Microinverter atau Tigo Optimizer agar panel surya yang tertutup bayangan tidak menjatuhkan seluruh string.`);
    status.score -= 30;
    if (status.level !== "DANGER") status.level = "WARNING";
  }
  if (shadingPct > 60) {
    warnings.push("Area atap tertutup bayangan ekstrem (> 60%). ROI sistem akan sangat lambat. Harap pertimbangkan relokasi lokasi penempatan panel.");
    status.score -= 30;
    status.level = "DANGER";
    status.isValid = false;
  }

  status.score = Math.max(0, status.score);
  return { status, warnings };
}

// 4. Rule-Based Product Filtering
export function filterProducts(recommendedKwp, isIndustrial, roofMaterial) {
  return products.filter(prod => {
    // Industrial check
    if (prod.isIndustrialOnly && !isIndustrial) {
      return false;
    }

    // Weight limits check: Light structural roofs (like asbestos or thin metal sheet) cannot support heavy panels
    if (roofMaterial === "asbes" && prod.weight > 30) {
      return false;
    }

    return true;
  });
}

// 5. MCDM TOPSIS ranking algorithm
// Kriteria: Price (Cost - min), Efficiency (Benefit - max), Warranty (Benefit - max), techRating (Benefit - max)
export function rankProductsTopsis(filteredList, weights) {
  if (filteredList.length === 0) return [];

  // Criteria columns: Price, Efficiency, Warranty, techRating
  // Weights should sum to 1. E.g., { price: 0.35, efficiency: 0.25, warranty: 0.20, techRating: 0.20 }
  const totalWeight = weights.price + weights.efficiency + weights.warranty + weights.techRating;
  const w = {
    price: weights.price / totalWeight,
    efficiency: weights.efficiency / totalWeight,
    warranty: weights.warranty / totalWeight,
    techRating: weights.techRating / totalWeight
  };

  // Step 1: Normalization (Vector Normalization)
  const normDenom = { price: 0, efficiency: 0, warranty: 0, techRating: 0 };

  filteredList.forEach(p => {
    normDenom.price += Math.pow(p.price, 2);
    normDenom.efficiency += Math.pow(p.efficiency, 2);
    normDenom.warranty += Math.pow(p.warranty, 2);
    normDenom.techRating += Math.pow(p.techRating, 2);
  });

  Object.keys(normDenom).forEach(key => {
    normDenom[key] = Math.sqrt(normDenom[key]);
  });

  // Step 2: Weighted Normalization & Find Ideal Positive (A+) & Ideal Negative (A-)
  // For Benefit: A+ is max, A- is min
  // For Cost (Price): A+ is min, A- is max
  const weightedMatrix = filteredList.map(p => {
    return {
      ...p,
      v_price: (p.price / normDenom.price) * w.price,
      v_efficiency: (p.efficiency / normDenom.efficiency) * w.efficiency,
      v_warranty: (p.warranty / normDenom.warranty) * w.warranty,
      v_techRating: (p.techRating / normDenom.techRating) * w.techRating
    };
  });

  const idealPositive = {
    price: Math.min(...weightedMatrix.map(m => m.v_price)), // lower is better
    efficiency: Math.max(...weightedMatrix.map(m => m.v_efficiency)),
    warranty: Math.max(...weightedMatrix.map(m => m.v_warranty)),
    techRating: Math.max(...weightedMatrix.map(m => m.v_techRating))
  };

  const idealNegative = {
    price: Math.max(...weightedMatrix.map(m => m.v_price)), // higher is worse
    efficiency: Math.min(...weightedMatrix.map(m => m.v_efficiency)),
    warranty: Math.min(...weightedMatrix.map(m => m.v_warranty)),
    techRating: Math.min(...weightedMatrix.map(m => m.v_techRating))
  };

  // Step 3: Calculate Separation Measures (S+ and S-) and Relative Closeness (C)
  const ranked = weightedMatrix.map(m => {
    const sPlus = Math.sqrt(
      Math.pow(m.v_price - idealPositive.price, 2) +
      Math.pow(m.v_efficiency - idealPositive.efficiency, 2) +
      Math.pow(m.v_warranty - idealPositive.warranty, 2) +
      Math.pow(m.v_techRating - idealPositive.techRating, 2)
    );

    const sMinus = Math.sqrt(
      Math.pow(m.v_price - idealNegative.price, 2) +
      Math.pow(m.v_efficiency - idealNegative.efficiency, 2) +
      Math.pow(m.v_warranty - idealNegative.warranty, 2) +
      Math.pow(m.v_techRating - idealNegative.techRating, 2)
    );

    // Relative Closeness to ideal solution (C = S- / (S+ + S-))
    const closeness = sMinus + sPlus === 0 ? 0 : sMinus / (sPlus + sMinus);

    return {
      id: m.id,
      brand: m.brand,
      model: m.model,
      price: m.price,
      efficiency: m.efficiency,
      warranty: m.warranty,
      techRating: m.techRating,
      closeness: parseFloat((closeness * 100).toFixed(1)) // score out of 100
    };
  });

  // Sort by closeness score descending
  return ranked.sort((a, b) => b.closeness - a.closeness);
}
