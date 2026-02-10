export interface Product {
    id: string;
    name: string;
    slug: string;
    image: string;
    description: string;
    features?: string[];
}

export const products: Product[] = [
    {
        id: 'pipes-and-tubes',
        name: 'Pipes and Tubes',
        slug: 'pipes-and-tubes',
        image: '/images/products/SS seamless and erw pipe.jpeg',
        description: 'We offer a wide range of high-quality pipes and tubes in various grades and specifications. Our seamless and welded pipes are designed for durability and reliability in diverse industrial applications, including oil and gas, petrochemical, and construction industries.',
        features: ['High durability', 'Corrosion resistant', 'Various sizes available']
    },
    {
        id: 'pipe-fittings',
        name: 'Pipe Fittings',
        slug: 'pipe-fittings',
        image: '/images/products/pipe fitting.jpeg',
        description: 'Our extensive manufacturing range includes pipe fittings in all grades. We provide precision-engineered fittings that ensure leak-proof connections and superior performance in high-pressure environments.',
        features: ['Leak-proof', 'Precision engineered', 'High pressure rating']
    },
    {
        id: 'fasteners',
        name: 'Fasteners',
        slug: 'fasteners',
        image: '/images/products/ss fastner.jpeg',
        description: 'We supply high-tensile fasteners including bolts, nuts, washers, and screws. Manufactured to international standards, our fasteners are known for their strength, durability, and resistance to corrosion.',
        features: ['High tensile strength', 'International standards compliance', 'Corrosion resistance']
    },
    {
        id: 'sheets-plates-coils',
        name: 'Sheets & Plates',
        slug: 'sheets-plates-coils',
        image: '/images/products/sheet plate.jpeg',
        description: 'Premium quality stainless steel sheets and plates suitable for various fabrication needs. Available in different standard sizes, thicknesses, and finishes to meet your specific project requirements.',
        features: ['Various finishes', 'Custom dimensions', 'High surface quality']
    },
    {
        id: 'round-bars',
        name: 'Round Bars',
        slug: 'round-bars',
        image: '/images/products/SS round bar.jpeg',
        description: 'Our round bars are manufactured using latest technology and high-grade materials. They are widely used in machining, construction, and manufacturing sectors due to their excellent mechanical properties.',
        features: ['Excellent machinability', 'Uniform dimensions', 'High strength']
    },
    {
        id: 'flanges',
        name: 'Flanges',
        slug: 'flanges',
        image: '/images/products/SS flanges.jpeg',
        description: 'We offer a comprehensive range of flanges including Slip-on, Blind, Weld Neck, and Socket Weld flanges. These are designed to withstand high pressure and temperature conditions.',
        features: ['High pressure tolerance', 'Various types available', 'Dimensional accuracy']
    },
    {
        id: 'buttweld-fittings',
        name: 'Buttweld Fittings',
        slug: 'buttweld-fittings',
        image: '/images/products/buttweld fitting.jpeg',
        description: 'Quality buttweld fittings for seamless pipe connections. Our fittings ensure smooth flow integrity and are available in Elbows, Tees, Reducers, and Caps.',
        features: ['Seamless connection', 'Smooth flow', 'Wide range of types']
    },
    {
        id: 'forged-fittings',
        name: 'Forged Fittings',
        slug: 'forged-fittings',
        image: '/images/products/Forged fitting.jpeg',
        description: 'High-pressure forged fittings manufactured for critical industrial applications. Known for their high impact strength and resistance to mechanical shock.',
        features: ['High impact strength', 'Critical application suited', 'Robust construction']
    },
    {
        id: 'ss-coils',
        name: 'SS Coils',
        slug: 'ss-coils',
        image: '/images/products/S.S coil.jpeg',
        description: 'Stainless Steel coils available in various grades and finishes. Ideal for manufacturing processes, these coils offer excellent formability and corrosion resistance.',
        features: ['Excellent formability', 'Consistent thickness', 'Wide grade selection']
    },
    {
        id: 'perforated-sheets',
        name: 'Perforated Sheets',
        slug: 'decorative-sheets', // Keeping existing slug link from previous file for now
        image: '/images/products/s.s perforated sheet.jpeg',
        description: 'High-quality perforated sheets for filtration, separation, and decorative purposes. Available in various hole patterns and materials.',
        features: ['Precise perforation', 'Multiple patterns', 'Versatile applications']
    },
    {
        id: 'valves',
        name: 'Valves',
        slug: 'valves',
        image: '/images/products/valves.jpeg',
        description: 'Industrial valves designed for precise flow control. Our range includes Gate, Globe, Check, and Ball valves suitable for various media and pressure ratings.',
        features: ['Precise control', 'Durable mechanism', 'Leak-tight sealing']
    },
    {
        id: 'angles-channels',
        name: 'Angles & Channels',
        slug: 'angles-channels',
        image: '/images/products/ss angel.jpeg',
        description: 'Structural angles and channels for construction and fabrication. These profiles offer high strength-to-weight ratio and are essential for structural support frameworks.',
        features: ['Structural support', 'High strength', 'Versatile use']
    },
    {
        id: 'alum-round-bars',
        name: 'Aluminium Round Bars',
        slug: 'alum-round-bars',
        image: '/images/products/ALuminium Round bar.jpeg',
        description: 'Lightweight and corrosion-resistant Aluminium round bars. Ideal for aerospace, marine, and general engineering applications requiring high strength-to-weight performance.',
        features: ['Lightweight', 'Corrosion resistant', 'Aerospace grade available']
    },
];
