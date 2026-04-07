const PRODUCTS = [
  // ── CUTLERY ──────────────────────────────────────────────────────────────
  {
    id: 'knife-set',
    name: 'Disposable Knife Utensils Cutlery Set Biodegradable Plant-Based',
    category: 'Cutlery',
    image: 'images/Disposable-Knife-Utensils-Cutlery-Set-Biodegradable-Plant-Based.jpg',
    badge: 'Plant-Based',
    description: 'Eco-friendly tableware made from cornstarch fiber, containing 1,000 starch-based table knives per set. Licensed under Guangdong XK16-204-04901, these sustainable utensils feature heavy-duty construction designed to withstand complete meals without breakage or bending. The polished surface and rounded shape enhance safety and comfort during use. Natural colouring complements any setting — parties, weddings, camping, picnics, BBQs, and everyday dining.',
    features: [
      'Material: Cornstarch fiber (PSM)',
      '1,000 pieces per set (50 pcs × 20 bags)',
      'Heavy-duty, break-resistant design',
      'Polished surface with rounded shape for comfort',
      'Microwave safe up to 120°C (248°F)',
      'Freezer safe to -20°C (-4°F)',
      'Custom logo printing available',
      'License: Guangdong XK16-204-04901'
    ]
  },
  {
    id: 'spoon-set',
    name: 'Disposable Spoon Cutlery Set Biodegradable Utensils',
    category: 'Cutlery',
    image: 'images/Disposable-Spoon-Cutlery-Set-Biodegradable-Utensils.jpg',
    badge: 'Biodegradable',
    description: 'Lightweight, portable spoons ideal for fast-food restaurants, camping, and office lunches. Made from biodegradable materials including paper pulp, cornstarch, bamboo, and plant-based alternatives that break down naturally over time — significantly reducing environmental footprint.',
    features: [
      'Material: Biodegradable (paper pulp / cornstarch)',
      'Lightweight and portable design',
      'Eliminates need for washing and maintenance',
      'Cost-effective for large events and gatherings',
      'Optimised production to minimise waste and energy',
      'Designed for easy recycling or composting after use'
    ]
  },
  {
    id: 'spoon-set-1000',
    name: 'Disposable Spoon Cutlery Set Biodegradable Utensils (1000-Piece)',
    category: 'Cutlery',
    image: 'images/Disposable-Spoon-Cutlery-Set-Biodegradable-Utensils.png',
    badge: '1000-Piece',
    description: 'Premium eco-friendly cutlery manufactured from plant-based cornstarch fiber. The 1,000-piece collection consists of starch-based table spoons thoughtfully packed in 20 bags, each containing 50 spoons. Durable, reusable, and 100% satisfaction guaranteed.',
    features: [
      'Material: Cornstarch fiber (PSM)',
      '1,000 pieces per set (50 pcs × 20 bags)',
      'Durable — resistant to breakage, bending, or snapping',
      'Well-polished surface with rounded shape',
      'Reusable — washable for multiple uses',
      'Microwave safe up to 120°C (248°F)',
      'Freezer safe to -20°C (-4°F)',
      'Suitable for parties, weddings, camping, travel, BBQs',
      'License: Guangdong XK16-204-04901',
      '100% satisfaction guarantee'
    ]
  },
  {
    id: 'fork-set',
    name: 'Disposable Fork Utensils Cutlery Set Biodegradable Plant-Based',
    category: 'Cutlery',
    image: 'images/Disposable-Fork-Utensils-Cutlery-Set-Biodegradable-Plant-Based.png',
    badge: 'Plant-Based',
    description: 'Eco-conscious forks crafted from renewable materials like plant-based plastics and cornstarch. Unlike conventional plastic forks requiring years to decompose, these biodegradable alternatives break down naturally in shorter timeframes, minimising environmental impact while maintaining full strength and functionality.',
    features: [
      'Material: PSM (starch-based)',
      '1,000 pieces per set (50 pcs × 20 bags)',
      'Microwave safe',
      'Custom logo printing available',
      'License: Guangdong XK16-204-04901',
      'Suitable for homes, restaurants, catering events'
    ]
  },

  // ── CONTAINERS & BOWLS ───────────────────────────────────────────────────
  {
    id: 'bowl-450ml',
    name: 'Food Containers 450ML Round Disposable Bowls with Lids',
    category: 'Containers',
    image: 'images/450ml.jpg',
    badge: 'Biodegradable',
    description: 'These 450ml round disposable bowls with lids offer versatile food storage and transport solutions. Secure lids prevent spills and leaks, enabling convenient stacking and refrigerator storage while maintaining food freshness. Applications span households, restaurants, catering services, and food trucks.',
    features: [
      'Material: Corn starch',
      'Capacity: 450ml',
      'Packaging: 100 pieces per unit',
      'Weight: 7g per unit',
      'Microwave safe',
      'Custom logo printing available',
      'Degradable: Yes',
      'Available in 100, 200, or 300 sets per carton'
    ]
  },
  {
    id: 'bowl-550ml',
    name: 'Biodegradable 550ML Round Disposable Bowls with Lids',
    category: 'Containers',
    image: 'images/Biodegradable-550ML-Round-Disposable-bowls-with-lids.jpg',
    badge: 'Biodegradable',
    description: 'Made from thickened paper material for enhanced weight capacity without compromising integrity. Natural brown colour produced without bleach. Water and oil resistant, suitable for salads, steaks, and pasta. Accommodates both hot and cold storage, works in microwaves and freezers. Ideal for picnics, barbecues, and camping.',
    features: [
      'Material: Corn starch / 100% natural biodegradable plant fibre',
      'Capacity: 550ml',
      'Packaging: 100 pieces per unit',
      'Water and oil resistant',
      'Microwave safe and freezer safe',
      'Smooth, burr-free, unbleached brown finish',
      'Logo customisation available',
      'Available in 100, 200, or 300 sets'
    ]
  },
  {
    id: 'bowl-750ml',
    name: 'Bio Containers 750ML Round Disposable Bowls with Lids',
    category: 'Containers',
    image: 'images/Bio-Containers-750ML-Round-Disposable-bowls-with-lids.png',
    badge: 'Crush-Resistant',
    description: 'Enhanced durability with a crush-resistant design. Made from 100% natural biodegradable plant fibre, maintaining structural integrity even when exposed to water and oil. Suitable for takeout containers and refrigerated foods. The elegant unbleached brown design suits daily meals, family gatherings, outdoor picnics, and travel.',
    features: [
      'Material: 100% natural biodegradable plant fibre',
      'Capacity: 750ml',
      'Packaging: 100, 200, or 300 sets per carton',
      'Weight: 7g per bowl and lid',
      'Crush-resistant thickened texture',
      'Smooth, unbleached brown finish',
      'Microwave and freezer safe',
      'Water and oil resistant',
      'Logo customisation available'
    ]
  },
  {
    id: 'bowl-650ml-togo',
    name: 'To Go Containers 650ML Round Disposable Bowls with Lids',
    category: 'Containers',
    image: 'images/650ml.png',
    badge: '100-Pack',
    description: 'Each package contains 100 bowls and lids made from 100% natural biodegradable material — environmentally friendly plant fibre. Thickened paper construction ensures durability and weight-bearing capability. Smooth, burr-free, unbleached raw brown colour for safe use. Resist water and oil, microwave and freezer compatible.',
    features: [
      'Material: Corn starch / 100% biodegradable plant fibre',
      'Capacity: 650ml',
      '100 pieces (bowls + lids) per package',
      'Pressure-resistant design',
      'Microwave and freezer safe',
      'Water and oil resistant',
      'Weight: 7g per unit',
      'Available in 100, 200, or 300 sets'
    ]
  },
  {
    id: 'container-500ml-a',
    name: '500ML Disposable Food Containers Eco-Friendly For Taking Away',
    category: 'Containers',
    image: 'images/A-Disposable-Food-Box.png',
    badge: 'Eco-Friendly',
    description: 'Thickened bowls that are water and oil-resistant, suitable for daily use, family gatherings, outdoor picnics, and travel. Excellent takeaway food packaging accommodating typical dietary portions like salads, steaks, and pasta. Made from 100% biodegradable cornstarch material.',
    features: [
      'Material: Cornstarch (100% biodegradable)',
      'Capacity: 500ml',
      'Microwave and freezer safe',
      'Water and oil proof',
      'Embossed design with smooth, burr-free finish',
      'Natural brown colour — no harmful bleaches',
      'Logo printing available',
      '100, 200, or 300 sets per carton'
    ]
  },
  {
    id: 'container-500ml-b',
    name: '500ML Disposable Food Containers Eco-Friendly For Taking Away (Sugarcane)',
    category: 'Containers',
    image: 'images/A-Disposable-Food-Box1.png',
    badge: 'Sugarcane',
    description: 'Sugarcane fibre biodegradable bowls available in packs of 100 units with matching lids. Manufactured from 100% natural biodegradable materials with an embossed design for a perfect texture. Brown primary colour without harmful bleaches.',
    features: [
      'Material: 100% natural biodegradable sugarcane fibre',
      'Capacity: 500ml',
      'Pack: 100 bowls + 100 lids',
      'Embossed design with smooth texture',
      'Burr-free surface',
      'Natural brown, no harmful bleaches'
    ]
  },
  {
    id: 'container-625ml',
    name: 'E-BEE 625ML Take Away Food Containers Meal Prep',
    category: 'Containers',
    image: 'images/F-Disposable-Food-Box.png',
    badge: 'Meal Prep',
    description: 'Eco-friendly meal prep containers with a 625ml capacity ideal for storing nutritious meals in advance. Secure seal design with a cover that prevents food spoilage and odour diffusion, allowing safe stacking without leakage concerns. Microwave and dishwasher safe.',
    features: [
      'Material: Biodegradable, food-safe natural materials',
      'Capacity: 625ml',
      'Secure seal prevents air and odour diffusion',
      'Microwave safe for convenient meal heating',
      'Dishwasher safe for easy cleanup',
      'Reusable and durable design',
      'Free from harmful chemicals',
      'Compostable alternative to traditional plastics'
    ]
  },
  {
    id: 'bowl-650ml-paper',
    name: 'Biodegradable Paper Bowl E-BEE 650ML Disposable Bowls with Lids',
    category: 'Containers',
    image: 'images/B-Disposable-Food-Box.png',
    badge: 'Compostable',
    description: 'Manufactured from wheatstraw — an annually renewable agricultural byproduct fibre. 100% sustainable, compostable, and biodegradable container tray suitable for meals, salads, desserts, and appetizers. Ideal for restaurants, markets, grocery stores, salad bars, RVs, and camping.',
    features: [
      'Material: Cornstarch / wheatstraw fibre',
      'Capacity: 650ml',
      'Available in 100, 200, or 300 sets per carton',
      'Custom logo printing available',
      'Fully degradable and biodegradable',
      'Microwave oven safe',
      'Includes lids',
      'Delicate design'
    ]
  },
  {
    id: 'container-750ml',
    name: '750ML Disposable Food Containers with Lids For Taking Away',
    category: 'Containers',
    image: 'images/C-Disposable-Food-Box.png',
    badge: 'Biodegradable',
    description: 'Sugarcane fibre biodegradable bowls crafted from 100% natural and biodegradable materials, combining environmental responsibility with practical functionality. Embossed with a smooth, burr-free finish, accommodating salads, steaks, spaghetti, and various food items.',
    features: [
      'Material: 100% natural biodegradable sugarcane fibre',
      'Capacity: 750ml',
      'Water and oil proof — thickened construction',
      'Microwave and freezer safe',
      'Embossed smooth, burr-free finish',
      'Completely degradable, no harmful bleaches',
      '100, 200, or 300 sets per carton',
      'Logo printing available'
    ]
  },
  {
    id: 'bowl-850ml-eco',
    name: '850ML Eco-Friendly Paper Bowls for Milk, Cereals, Snacks & Salads',
    category: 'Containers',
    image: 'images/850ML-Eco-friendly-Paper-Bowls-for-Milk-Cereals-Snacks-Salads.jpg',
    badge: 'Eco-Friendly',
    description: 'Made from sustainably sourced sugarcane fibres, these 850ml bowls are 100% biodegradable and compostable with no plastic or wax lining. Superior strength and leak-resistant properties. Ideal for milk cereals, nuts, popcorn, snacks, small salads, chili soups, dips, and side dishes. Supports both hot and cold food.',
    features: [
      'Material: Paper / sugarcane fibre',
      'Capacity: 850ml',
      'Food grade — safe and odourless',
      'Waterproof and oil-proof coating',
      'Microwaveable up to 120°C',
      'Freezer safe to -20°C',
      'Thickened, pressure-resistant construction',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      '100% biodegradable and compostable, no wax lining'
    ]
  },
  {
    id: 'container-850ml',
    name: '850ML Disposable Food Storage Container with Lid Take-Out Box',
    category: 'Containers',
    image: 'images/D-Disposable-Food-Box.png',
    badge: 'Large Capacity',
    description: 'This meal prep container offers substantial volume with a single-compartment lid design. Seal design prevents food spoilage by creating an airtight barrier that maintains freshness and prevents odour diffusion in refrigerated storage. Microwave and dishwasher safe — reusable multiple times.',
    features: [
      'Capacity: 850ml',
      'Single compartment with secure lid',
      'Seal design prevents food spoilage and odour diffusion',
      'Airtight seal maintains flavour, colour, and texture',
      'Microwave and dishwasher safe',
      'Made from food-safe materials — no harmful chemicals',
      'Reusable and stackable',
      'Recyclable or disposable option'
    ]
  },
  {
    id: 'bowl-1000ml',
    name: '1000ML Compostable Paper Bowls with Lids for Hot/Cold Use',
    category: 'Containers',
    image: 'images/E-Disposable-Food-Box.png',
    badge: 'Compostable',
    description: 'Eco-friendly meal prep containers holding 1000ml (33oz) with airtight lids to maintain food freshness. Made from 100% natural biodegradable cornstarch material, safely withstanding temperatures from -20°C to +120°C — suitable for freezer, microwave, and dishwasher use. Stackable and reusable.',
    features: [
      'Material: Cornstarch (100% natural, biodegradable)',
      'Capacity: 1000ml (33oz)',
      'Temperature range: -20°C to +120°C',
      'Microwave, freezer, and dishwasher safe',
      'Reusable and durable — flexible, resistant to breakage',
      'Stackable design for space-efficient storage',
      'Airtight lids seal in moisture',
      'Logo printing available',
      '100, 200, or 300 sets per carton'
    ]
  },
  {
    id: 'sugarcane-bowl',
    name: 'Sugarcane Fiber Biodegradable Round Disposable Bowls with Lids',
    category: 'Containers',
    image: 'images/Sugarcane-Fiber-Biodegradable-Round-Disposable-bowls-with-lids.png',
    badge: 'Sugarcane',
    description: '100% natural biodegradable plant fibre construction ensuring durability and strength. Premium sugarcane bagasse bowls with matching lids — crafted to reduce single-use plastic waste while delivering reliable performance for takeaway meals, family gatherings, picnics, and outdoor activities.',
    features: [
      'Material: 100% natural biodegradable sugarcane fibre',
      'Includes matching lids',
      'Water and oil resistant',
      'Microwave and freezer safe',
      'Thickened, pressure-resistant design',
      'Smooth, burr-free finish',
      '100% compostable and biodegradable',
      'Logo printing available'
    ]
  },

  // ── PLATES & TRAYS ───────────────────────────────────────────────────────
  {
    id: 'plate-3in-dipping',
    name: 'Compostable Paper Plates E-BEE 3 Inch Dipping Plate for Sauce and Dip',
    category: 'Plates',
    image: 'images/Compostable-Paper-Plates-E-BEE-3-Inch-Dipping-Plate-for-Sauce-and-Dip.jpg',
    badge: 'Compostable',
    description: 'Crafted from 100% bagasse sugarcane fibre with no plastic or wax linings, ensuring superior strength, cut-resistance, and leak-resistance. Ideal for parties, family events, schools, restaurants, BBQs, picnics, and outdoor gatherings. 100% risk-free satisfaction guarantee.',
    features: [
      'Material: 100% bagasse sugarcane fibre',
      'Size: 3 inches',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Food grade — safe, odourless, waterproof, oil-proof',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Thickened, pressure-resistant design',
      '100% degradable and compostable'
    ]
  },
  {
    id: 'plate-5in-brown',
    name: '5 Inch Natural Unbleached Brown Compostable Disposable Paper Plate',
    category: 'Plates',
    image: 'images/5-Inch-Natural-Unbleached-Brown-Compostable-Disposable-Paper-Plate.jpg',
    badge: 'Unbleached',
    description: 'Manufactured from sustainably harvested sugarcane fibres. 100% biodegradable and suitable for composting. No plastic or wax coating — superior strength while resisting cuts and leaks. Accommodates microwave heating and freezer storage.',
    features: [
      'Material: 100% bagasse sugarcane fibre',
      'Size: 5 inches',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Cut-resistant and leak-resistant',
      'No plastic or wax lining',
      '100% biodegradable'
    ]
  },
  {
    id: 'tray-6in-gathering',
    name: 'E-BEE 6 Inch Biodegradable Food Tray For Gathering',
    category: 'Plates',
    image: 'images/E-BEE-6-Inch-Biodegradable-Food-Tray-For-Gathering.jpg',
    badge: 'BPA-Free',
    description: 'Square plates made from 100% sugarcane fibre, perfectly matched with any food — sandwiches, burgers, pasta, salads, baked beans, french fries, and fruits. Compostable in 3-6 months in a backyard setting. Suitable for gatherings, daily meals, birthdays, camping, and picnics.',
    features: [
      'Material: Paper (sugarcane fibre bagasse)',
      'Size: 6 inches',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Waterproof and oil-resistant',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'BPA-free, wax-free, gluten-free',
      'Compostable in 3-6 months'
    ]
  },
  {
    id: 'plate-6in-natural',
    name: 'E-BEE 6 Inch Natural Unbleached Biodegradable Plate For BBQ',
    category: 'Plates',
    image: 'images/E-BEE-6-Inch-Natural-Unbleached-Biodegradable-Plate-For-BBQ.jpg',
    badge: 'Biodegradable',
    description: 'Durable, biodegradable plates with an innovative design. Sleek, burr-free shape easy to carry and suitable for any setting. Pressure-resistant with strong load-bearing capacity, capable of holding large food servings without breaking or bending. Ideal for family events, schools, restaurants, and outdoor BBQs.',
    features: [
      'Material: Paper (sugarcane fibre)',
      'Size: 6 inches',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Suitable for hot and cold foods',
      'Pressure-resistant, strong load-bearing',
      'Sleek, burr-free edges',
      '100% biodegradable and compostable'
    ]
  },
  {
    id: 'plate-6in-brown',
    name: 'Sugarcane Disposable 6 Inch Natural Unbleached Brown Paper Plate',
    category: 'Plates',
    image: 'images/Sugarcane-Disposable-6-Inch-Natural-Unbleached-Brown-Paper-Plate.jpg',
    badge: 'Sugarcane',
    description: 'Manufactured from sustainably sourced sugarcane fibres, offering 100% biodegradability and composability. Superior strength with no plastic or wax lining — cut-resistant and leak-resistant. Suitable for family gatherings, schools, restaurants, and outdoor events.',
    features: [
      'Material: 100% bagasse sugarcane fibre',
      'Size: 6 inches',
      'Thickness: 0.1mm',
      'Natural unbleached brown colour',
      'Packing: 50 pieces per carton',
      'Waterproof and oil-proof',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      '100% biodegradable and compostable'
    ]
  },
  {
    id: 'plate-6in-square-white',
    name: 'E-BEE 6 Inch White Square Biodegradable Plates for Daily Meal',
    category: 'Plates',
    image: 'images/E-BEE-6-Inch-White-Square-Biodegradable-Plates-for-Daily-Meal.jpg',
    badge: '50-Pack',
    description: '50-pack 100% compostable 6-inch heavy-duty square plates made from sugarcane fibre. Perfect for sandwiches, burgers, pasta, salads, and baked goods — everyday use without dishwashing. Decompose naturally without the centuries-long degradation of traditional materials.',
    features: [
      'Material: 100% sugar cane fibre',
      'Size: 6 inches, Square, White',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Compostable in 3-6 months',
      'Microwave and freezer safe',
      'Oil-resistant, heat-resistant, cut-resistant',
      'BPA-free, wax-free, gluten-free'
    ]
  },
  {
    id: 'plate-7in-natural',
    name: 'E-BEE 7 Inch Natural Bagasse Eco-Friendly Plate For BBQ',
    category: 'Plates',
    image: 'images/E-BEE-7-Inch-Natural-Bagasse-Eco-Friendly-Plate-For-BBQ.jpg',
    badge: 'Bagasse',
    description: 'Crafted from 100% bagasse sugarcane fibre, sourced sustainably. Waterproof and oil-resistant, suitable for both hot and cold foods. Sleek and burr-free body, with microwave heating up to 120°C and refrigeration down to -20°C. Ideal for BBQs, office lunches, birthdays, and weddings.',
    features: [
      'Material: 100% bagasse sugarcane fibre',
      'Size: 7 inches',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Waterproof and oil-resistant',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Cut-resistant and leak-resistant',
      '100% compostable'
    ]
  },
  {
    id: 'plate-7in-white-picnic',
    name: '7 Inch White Compostable Paper Plates for Picnic',
    category: 'Plates',
    image: 'images/7-Inch-White-Compostable-Paper-Plates-for-Picnic.jpg',
    badge: 'Compostable',
    description: 'Crafted from sustainably sourced bagasse sugarcane fibre — 100% biodegradable and suitable for composting. No plastic or wax lining, superior strength, cut-resistant and leak-resistant. Works in microwaves and freezers. Ideal for family gatherings, schools, restaurants, BBQs, picnics, and weddings.',
    features: [
      'Material: 100% bagasse sugarcane fibre',
      'Size: 7 inches, White',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Waterproof and oil-resistant',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Thickened, pressure-resistant design',
      'Smooth, burr-free construction'
    ]
  },
  {
    id: 'tray-7in-white',
    name: 'E-BEE 7 Inch White Biodegradable Paper Tray',
    category: 'Plates',
    image: 'images/E-BEE-7-Inch-White-Biodegradable-Paper-Tray.jpg',
    badge: 'Biodegradable',
    description: 'Manufactured from sustainably sourced sugarcane fibres — fully compostable. Superior strength without plastic or wax lining, offering excellent cut and leak resistance while remaining microwave and freezer safe. Suitable for heavier foods including soups and gravies.',
    features: [
      'Material: 100% bagasse sugarcane fibre',
      'Size: 7 inches, White',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Waterproof and oil-proof',
      'Pressure-resistant, strong load-bearing',
      'Sleek, burr-free finish'
    ]
  },
  {
    id: 'plate-8in-bagasse-bbq',
    name: 'E-BEE 8 Inch Bagasse Cutlery Paper Plates for Deliver BBQ',
    category: 'Plates',
    image: 'images/E-BEE-8-Inch-Bagasse-Cutlery-Paper-Plates-for-Deliver-BBQ.jpg',
    badge: 'Unbleached',
    description: 'Crafted from 100% sugarcane bagasse fibre — completely compostable and biodegradable. Superior strength with cut and leak resistance, plus a wide rim designed for serving saucy foods safely. Natural unbleached brown colour avoids harmful bleaching chemicals.',
    features: [
      'Material: 100% sugarcane bagasse fibre',
      'Size: 8 inches',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'No plastic or wax lining',
      'Wide, high rim design',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Food grade, toxin-free, odourless',
      'Fully compostable and biodegradable'
    ]
  },
  {
    id: 'plate-8in-compostable',
    name: '8 Inch Compostable Disposable Paper Plates for Deliver BBQ',
    category: 'Plates',
    image: 'images/8-Inch-Compostable-Disposable-Paper-Plates-for-Deliver-BBQ.jpg',
    badge: 'Compostable',
    description: 'Constructed from 100% bagasse sugarcane fibres. Cut-resistant, leak-proof and will not crack under pressure. Wide and tall sides prevent spills while displaying food elegantly. Classic white colour. Microwave and freezer safe — suitable for parties, events, and intimate dinners.',
    features: [
      'Material: 100% bagasse sugarcane fibre',
      'Size: 8 inches, White',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      '100% compostable and biodegradable',
      'Microwave safe and freezer friendly',
      'Cut-resistant and leak-proof',
      'Heavy-duty — no plastic or wax liners',
      'Wide and tall sides prevent spills'
    ]
  },
  {
    id: 'plate-8in-white',
    name: 'E-BEE 8 Inch White Biodegradable Paper Plates for Parties',
    category: 'Plates',
    image: 'images/E-BEE-8-Inch-White-Biodegradable-Paper-Plates-for-Parties.jpg',
    badge: 'Party',
    description: 'Heavy-duty disposable paper plates perfect for serving any type of food hot or cold. Microwave and freezer compatible, ideal for birthday celebrations, weddings, camping, barbecues, picnics, and corporate events. Extra strong construction with space for a main course and 2 side dishes.',
    features: [
      'Material: Paper (biodegradable)',
      'Size: 8 inches, White',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Microwave and freezer safe',
      'Suitable for hot and cold foods',
      'Extra strong — holds main course + 2 sides',
      '100% biodegradable'
    ]
  },
  {
    id: 'plate-9in-compartment-white',
    name: '9 Inch Compartment White Bagasse Paper Plates for Party',
    category: 'Plates',
    image: 'images/9-Inch-Compartment-White-Bagasse-Paper-Plates-for-Party.jpg',
    badge: 'Compartment',
    description: 'Eco-friendly disposable plates made from 100% sugar cane fibres. Biodegradable, plant-based, natural unbleached brown colour. Suitable for both hot and cold foods. Microwaveable and freezer-safe with no pungent smell. Ideal for parties, picnics, restaurants, food trucks, and everyday meals.',
    features: [
      'Material: Paper (bagasse / sugar cane fibre)',
      'Size: 9 inches',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Biodegradable: Yes',
      'Microwaveable and freezable',
      'Pressure-resistant construction',
      'Sleek, burr-free edges'
    ]
  },
  {
    id: 'plate-9in-3comp-natural',
    name: '9 Inch Disposable 3 Compartment Natural Bagasse Paper Plates',
    category: 'Plates',
    image: 'images/9-Inch-Disposable-3-Compartment-Natural-Bagasse-Paper-Plates.jpg',
    badge: '3-Compartment',
    description: 'Heavy-duty compartment plates featuring three sections ideal for one main dish with two sides. Made from 100% sugarcane fibres — liquid, oil, and cut resistant. Suitable for daily meals, parties, camping, picnics, BBQs, weddings, and catering. Microwave and freezer safe.',
    features: [
      'Material: Paper (bagasse/sugarcane fibre)',
      'Size: 9 inches, 3-compartment',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'No plastic or wax lining — unbleached, dye-free',
      'BPA-free and gluten-free',
      'Meets ASTM D6868 and D6866 standards',
      'Compostable in 1-6 months at industrial facilities'
    ]
  },
  {
    id: 'plate-9in-3comp-white',
    name: '9 Inch Disposable 3 Compartment White Bagasse Paper Plates',
    category: 'Plates',
    image: 'images/9-Inch-Disposable-3-Compartment-White-Bagasse-Paper-Plates.jpg',
    badge: '3-Compartment',
    description: 'Food-grade, safe and odourless, waterproof and oil-proof. Thickened pressure-resistant, strong load-bearing construction. Compostable within 3-6 months when composted. Ideal for portion control and food separation — sandwiches, burgers, pasta, salads, and side dishes.',
    features: [
      'Material: Bagasse paper (sugarcane-based)',
      'Size: 9 inches, White, 3-compartment',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'BPA-free and tree-free',
      'Oil and leak resistant, cut resistant',
      'Compostable in 3-6 months'
    ]
  },
  {
    id: 'plate-9in-round',
    name: '9 Inch Compostable Paper Plate for Party',
    category: 'Plates',
    image: 'images/9-Inch-Compostable-Paper-Plate-for-Party.jpg',
    badge: 'BPI Certified',
    description: 'Made from 100% sugarcane fibre — a plastic-free solution to traditional plastic plates. Food-grade, waterproof, and oil-resistant, suitable for various food types including sauces and greasy items. Decomposes within 3-6 months under ideal conditions. BPI Compostable Certified.',
    features: [
      'Material: Paper (sugarcane fibre)',
      'Size: 9 inches',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Odourless, waterproof, oil-resistant',
      'Sturdy, compression-resistant design',
      'BPI Compostable Certified',
      'Compostable in 3-6 months'
    ]
  },
  {
    id: 'plate-oval',
    name: 'E-BEE Disposable Dinner Oval Paper Plates For Dinner',
    category: 'Plates',
    image: 'images/E-BEE-Disposable-Dinner-Oval-Paper-Plates-For-Dinner.jpg',
    badge: 'Oval',
    description: 'Oval paper plates crafted from food-grade, degradable paper with a soak-proof coating that handles sticky jams, salad dressings, and greasy meats. Made from sugarcane fibres and bamboo — microwave and freezer safe while maintaining shape. Decompose completely within 3-6 months when composted.',
    features: [
      'Material: 100% recycled, sugarcane fibre, and bamboo blend',
      'Shape: Oval',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Soak-proof coating',
      'Waterproof and oil-resistant',
      'Pressure-resistant, cut-resistant, burr-free',
      'Microwave and freezer safe',
      '100% compostable and biodegradable'
    ]
  },
  {
    id: 'plate-sugarcane-compostable',
    name: 'Compostable Paper Plates E-BEE Biodegradable Sugarcane Plate',
    category: 'Plates',
    image: 'images/Compostable-Paper-Plates-E-BEE-Biodegradable-Sugarcane-Plate.jpg',
    badge: 'ASTM Certified',
    description: 'Crafted from 100% compostable sugarcane material, meeting ASTM D6400 and D6868 standards. Breaks down in industrial compost within 1-6 months or through home composting. Tree-free — no plastic, wax, bleach, or dyes. Microwave-safe up to 248°F and waterproof and oil-resistant.',
    features: [
      'Material: 100% compostable sugarcane',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Meets ASTM D6400 and D6868 standards',
      'Microwave safe up to 120°C (248°F)',
      'Refrigeration safe to -20°C',
      'Waterproof and oil-resistant',
      '100% degradable, BPA-free, plastic-free, gluten-free',
      'Compostable in 1-6 months'
    ]
  },
  {
    id: 'plate-10in-square-white',
    name: '10 Inch White Square Biodegradable Plates for BBQ & Parties',
    category: 'Plates',
    image: 'images/10-Inch-White-Square-Biodegradable-Plates-for-BBQ-Parties.jpg',
    badge: '50-Pack',
    description: 'Compostable plates made from 100% sugar cane fibre. Microwave and freezer safe, suitable for both hot and cold food. Oil-resistant, heat-resistant, and cut-resistant. BPA-free, wax-free, and gluten-free. Ideal for daily meals, birthdays, camping, picnics, and weddings.',
    features: [
      'Material: 100% sugarcane fibre',
      'Size: 10 inches, Square, White',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Microwave and freezer safe',
      'Oil-resistant, heat-resistant, cut-resistant',
      'Compostable in 3-6 months',
      'BPA-free, wax-free, gluten-free'
    ]
  },
  {
    id: 'plate-10in-3comp-brown',
    name: 'E-BEE 10" 3-Compartment Brown Paper Plates for Party',
    category: 'Plates',
    image: 'images/E-BEE-10-3-Brown-Compartment-Paper-Plates-for-Party.jpg',
    badge: '3-Compartment',
    description: 'Compartmentalized disposable plates designed to serve hot and cold foods while maintaining structural integrity. Cut-resistant and leak-resistant. Made from sustainable sugarcane fibres and bamboo — earth-friendly and compostable-certified. Thick and strong, with no wax lining, gluten-free, plastic-free, BPA-free.',
    features: [
      'Material: Sugarcane fibre and bamboo blend',
      'Size: 10 inches, 3-compartment, Brown',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Food-grade, toxin-free',
      'No wax lining, gluten-free, plastic-free, BPA-free',
      'Pressure-resistant construction'
    ]
  },
  {
    id: 'plate-10in-3comp-white',
    name: '10 Inch Disposable 3 Compartment White Bagasse Paper Plates',
    category: 'Plates',
    image: 'images/10-Inch-Disposable-3-Compartment-White-Bagasse-Paper-Plates.jpg',
    badge: '3-Compartment',
    description: 'Sturdy, heavyweight bagasse plates featuring separate compartments to prevent food mixing. 50-pack of white, round plates measuring 10 inches for various occasions. Sustainable alternative to traditional paper and plastic dinnerware. Temperature-safe for microwave, refrigerator, and freezer.',
    features: [
      'Material: Paper (bagasse-based)',
      'Size: 10 inches, White, 3-compartment',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Microwave, refrigerator, and freezer compatible',
      'Heavyweight — resistant to breakage',
      'Biodegradable: Yes'
    ]
  },
  {
    id: 'plate-10in-natural',
    name: '10 Inch Bagasse Natural Biodegradable Eco-Friendly Sugarcane Plates',
    category: 'Plates',
    image: 'images/10-inch-Bagasse-Natural-Biodegradable-Eco-Friendly-Sugarcane-Plates.jpg',
    badge: 'Eco-Friendly',
    description: 'Heavy-duty disposable paper plates made from bagasse mixture using a unique manufacturing process — higher density and greater durability. Suitable for sandwiches, hot dogs, burgers, pasta, and more. Made from 100% sugarcane fibre without plastic or wax, degrading completely within 90 days.',
    features: [
      'Material: 100% sugarcane fibre bagasse',
      'Size: 10 inches, Natural',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Waterproof and oil-resistant',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Compostable in 90 days'
    ]
  },
  {
    id: 'plate-10in-white',
    name: '10 Inch White Bagasse Biodegradable Eco-Friendly Sugarcane Plate',
    category: 'Plates',
    image: 'images/10-inch-White-Bagasse-Biodegradable-Eco-Friendly-Sugarcane-Plate.jpg',
    badge: 'Sugarcane',
    description: 'Crafted from 100% sugarcane fibre — no bisphenol A, wax, gluten, or chemicals — decomposing within 3-6 months. Superior strength without plastic lining, excellent resistance to cutting and leaking. Suitable for enchiladas, hamburgers, barbecue, and pasta dishes.',
    features: [
      'Material: 100% sugarcane bagasse fibre',
      'Size: 10 inches, White',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Oil-resistant, heat-resistant, cut-resistant',
      'Microwave and freezer safe',
      'No BPA, wax, gluten, or chemicals',
      'Compostable in 3-6 months'
    ]
  },
  {
    id: 'plate-12in',
    name: '12 Inch Compostable Biodegradable Paper Plates for Delivery',
    category: 'Plates',
    image: 'images/12-inch-Compostable-Biodegradable-Paper-Plates-for-Delivery.jpg',
    badge: 'Large',
    description: 'Sugarcane bagasse plates designed for both hot and cold foods. Multi-use leak-resistant, microwaveable and freezable — resistant to oil and water. Made from biodegradable materials suitable for home or industrial composting. No plastic or wax derivatives. Great for family meals, catering events, and takeout services.',
    features: [
      'Material: Paper (sugarcane bagasse)',
      'Size: 12 inches',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Pressure-resistant, smooth burr-free edges',
      'Food-grade safety standards',
      '100% biodegradable and compostable'
    ]
  },
  {
    id: 'tray-500ml-rectangular',
    name: 'E-BEE 500ML Large Rectangular Disposable Paper Platters',
    category: 'Plates',
    image: 'images/E-BEE-500ML-Large-Rectangular-Disposable-Paper-Platters.jpg',
    badge: 'Rectangular',
    description: 'Food-grade, safe and odourless, waterproof and oil-proof rectangular platters. Withstand microwave heating up to 120°C and refrigeration at -20°C. Easy-to-lift design with thickened construction for pressure resistance. Made from bagasse sugarcane pulp fibre — decomposes in 3-6 months.',
    features: [
      'Material: Paper (bagasse sugarcane pulp)',
      'Capacity / Size: 500ml, Rectangular',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Waterproof and oil-proof',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Thickened, pressure-resistant construction',
      'Compostable in 3-6 months'
    ]
  },
  {
    id: 'tray-500ml-large',
    name: '500ML Large Paper Plates Compostable Disposable Food Tray',
    category: 'Plates',
    image: 'images/500ML-Large-Paper-Plates-Compostable-Disposable-Food-Tray.jpg',
    badge: 'Compostable',
    description: 'Made from bagasse sugarcane pulp fibre, offering leakproof protection against all liquids including oil. Microwave and freezer-safe, decomposing within 3-6 months. Sleek, burr-free finish with thickened construction for load-bearing capacity.',
    features: [
      'Material: Paper (bagasse sugarcane pulp)',
      'Capacity: 500ml',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Waterproof and oil-resistant',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Burr-free edges',
      'Compostable in 3-6 months'
    ]
  },
  {
    id: 'platter-bamboo',
    name: 'Disposable White Dinner Platter Made of Natural Bamboo Fiber',
    category: 'Plates',
    image: 'images/Disposable-White-Dinner-Platter-Made-of-Natural-Bamboo-Fiber.jpg',
    badge: 'Bamboo',
    description: 'Oval paper platters ideal for desserts, cheese, and everyday dining. Made from recycled materials and plant-based fibres including sugarcane and bamboo. Soak-proof coating resists jam, dressing, and meat grease. Decomposes within 3-6 months when composted.',
    features: [
      'Material: Natural bamboo fibre + sugarcane blend',
      'Shape: Oval / Platter, White',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Waterproof and oil-proof',
      'Microwave safe up to 120°C',
      'Freezer safe to -20°C',
      'Thickened, pressure-resistant',
      '100% compostable and biodegradable'
    ]
  },
  {
    id: 'tray-sugarcane-white',
    name: 'Biodegradable White Sugarcane Disposable Food Trays for Party',
    category: 'Plates',
    image: 'images/Biodegradable-White-Sugarcane-Disposable-Food-Trays-for-Party.jpg',
    badge: 'ASTM Certified',
    description: 'Crafted from compostable sugarcane material that meets ASTM D6400 and D6868 standards. 100% tree-free — no plastic, wax lining, bleach, or dyes. Safely accommodates microwave heating up to 248°F and refrigeration at -20°C. Ideal for daily meals, parties, weddings, picnics, and camping events.',
    features: [
      'Material: Paper (sugarcane-based)',
      'Thickness: 0.1mm',
      'Packing: 50 pieces per carton',
      'Meets ASTM D6400 and D6868',
      'Waterproof and oil-resistant',
      'Microwave safe up to 120°C (248°F)',
      'Freezer safe to -20°C',
      'Food-grade, safe, odourless',
      'Compostable in 1-6 months'
    ]
  }
];
