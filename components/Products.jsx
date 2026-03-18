'use client';



import { useState, useEffect } from "react";

import Image from "next/image";

import Link from "next/link";

import { Download, Search } from "lucide-react";



const products = [
  {
    name: "PVC Stabilizer",
    types: [
      {
        name: "Shoes",
        products: [
          { name: "STAB TP 10-P 60", image: "/ProductImages/TP 10 P 60.png", tds: "/tds/PvcStabilizer/shoes/STAB TP 10-P 60.pdf" },
          { name: "STAB TP CZ 290 DK2", image: "/ProductImages/CZ 290 DK2.png", tds: "/tds/PvcStabilizer/shoes/STAB TP CZ 290 DK2.pdf" },
        ],
      },
      {
        name: "Translucent",
        products: [
          { name: "STAB TP 31-T", image: "/ProductImages/trans.png", tds: "/tds/PvcStabilizer/Translucent/STAB TP 31-T.pdf" },
        ],
      },
      {
        name: "Profile",
        products: [
          { name: "STAB TP 26", image: "/ProductImages/stab 26.png", tds: "/tds/PvcStabilizer/profile/STAB TP 26 .pdf" },
          { name: "STAB TP 28", image: "/ProductImages/stab 28.png", tds: "/tds/PvcStabilizer/profile/STAB TP 28 .pdf" },
          { name: "STAB TPW 9101", image: "/ProductImages/Stab 9101.png", tds: "/tds/PvcStabilizer/profile/STAB TPW 9101.pdf" },
        ],
      },
      {
        name: "Cables",
        groups: [
          {
            name: "Ca Zn Based Stabilizer",
            products: [
              { name: "STAB TP CZ 281", image: "/ProductImages/For all.png", tds: "/tds/PvcStabilizer/cables/CA Zn based/STAB TP CZ 281.pdf" },
              { name: "STAB TP CZ 281 DK2", image: "/ProductImages/For all.png", tds: "/tds/PvcStabilizer/cables/CA Zn based/STAB TP CZ 281 DK2.pdf" },
              { name: "STAB TP CZ 283", image: "/ProductImages/For all.png", tds: "/tds/PvcStabilizer/cables/CA Zn based/STAB TP CZ 283 .pdf" },
              { name: "STAB TP CZ 290", image: "/ProductImages/For all.png", tds: "/tds/PvcStabilizer/cables/CA Zn based/STAB TP CZ 290 .pdf" },
            ],
          },
          {
            name: "Lead Based Stabilizer",
            products: [
              { name: "STAB TP 10-P", image: "/ProductImages/Lead.png", tds: "/tds/PvcStabilizer/cables/lead based/STAB TP 10-P .pdf" },
              { name: "STAB TP 10-P-60", image: "/ProductImages/Lead.png", tds: "/tds/PvcStabilizer/cables/lead based/STAB TP 10-P 60 .pdf" },
            ],
          },
        ],
      },
      {
        name: "Fitting",
        products: [
          { name: "STAB TP 50", image: "/ProductImages/for fitting.png", tds: "/tds/PvcStabilizer/fitting/STAB TP 50 .pdf" },
          { name: "STAB TP 51", image: "/ProductImages/fitting.png", tds: "/tds/PvcStabilizer/fitting/STAB TP 51.pdf" },
        ],
      },
      {
        name: "Pipe",
        groups: [
          {
            name: "Calcium Zinc Based Stabilizer",
            products: [
              { name: "STAB TP CZ 310", image: "/ProductImages/cal.png", tds: "/tds/PvcStabilizer/pipe/calcium zinc based/STAB TP CZ 310.pdf" },
              { name: "STAB TP CZ 2810-6", image: "/ProductImages/cal.png", tds: "/tds/PvcStabilizer/pipe/calcium zinc based/STAB TP CZ 2810-6.pdf" },
            ],
          },
          {
            name: "Lead Based Stabilizer",
            products: [
              { name: "PLASTIC COMPOUND STABILIZER", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/PLASTIC COMPOUND STABILIZER.pdf" },
              { name: "STAB TP 27", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 27.pdf" },
              { name: "STAB TP 30-S", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 30-S.pdf" },
              { name: "STAB TP 31-P", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 31 - P.pdf" },
              { name: "STAB TP 31-V", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 31 - V.pdf" },
              { name: "STAB TP 31 BK-1", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 31 BK-1.pdf" },
              { name: "STAB TP 31 SS BLUE", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 31 SS Blue.pdf" },
              { name: "STAB TP 31 SS BLUE - 1", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 31 SS Blue-1.pdf" },
              { name: "STAB TP 31", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 31.pdf" },
              { name: "STAB TP 31-S", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 31-S.pdf" },
              { name: "STAB TP 31-SA", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 31-SA.pdf" },
              { name: "STAB TP 31SSS BLUE", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 31SSS BLUE.pdf" },
              { name: "STAB TP 32", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 32.pdf" },
              { name: "STAB TP 34", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 34.pdf" },
              { name: "STAB TP 35 B", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 35 B.pdf" },
              { name: "STAB TP 35", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 35.pdf" },
              { name: "STAB TP 36", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 36.pdf" },
              { name: "STAB TP 37", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 37.pdf" },
              { name: "STAB TP 38", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 38.pdf" },
              { name: "STAB TP 3184", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 3184.pdf" },
              { name: "STAB TP 3184-0", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 3184-0.pdf" },
              { name: "STAB TP 3184-1", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 3184-1.pdf" },
              { name: "STAB TP 3187", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 3187.pdf" },
              { name: "STAB TP 3189", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP 3189.pdf" },
              { name: "STAB TP 3290", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP-3290.pdf" },
              { name: "STAB TP-KR3000-31SSB", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP-KR3000-31SSB.pdf" },
              { name: "STAB TP-KR3000-3290", image: "/ProductImages/pipe.png", tds: "/tds/PvcStabilizer/pipe/lead based/STAB TP-KR3000-3290.pdf" },
            ],
          },
        ],
      },
    ],
  },

  // ===== Metallic Stearates =====
  {
    name: "Metallic Stearates",
    types: [
      {
  name: "Products",
  products: [
    { name: "CA-30 CALCIUM STEARATE", image: "/ProductImages/CA_30_CALCIUM_STEARATE.png", tds: "/tds/Metallic Sterates/CA-30 CALCIUM STEARATE.pdf" },

    { name: "MG-40 MAGNESIUM STEARATE", image: "/ProductImages/MG_40_MAGNESIUM_STEARATE.png", tds: "/tds/Metallic Sterates/MG-40 MAGNESIUM STEARATE.pdf" },

    { name: "TP-28 LEAD STEARATE", image: "/ProductImages/TP_28_LEAD_STEARATE.png", tds: "/tds/Metallic Sterates/TP-28 LEAD STEARATE.pdf" },

    { name: "ZN-55 ZINC STEARATE", image: "/ProductImages/ZN_55_ZINC_STEARATE.png", tds: "/tds/Metallic Sterates/Zn-55 Zinc Stearate.pdf" },

    { name: "ZN-55B ZINC STEARATE", image: "/ProductImages/ZN_55B_ZINC_STEARATE.png", tds: "/tds/Metallic Sterates/Zn-55B Zin Stearate.pdf" },

    { name: "ZN-485 ZINC STEARATE", image: "/ProductImages/ZN_485_ZINC_STEARATE.png", tds: "/tds/Metallic Sterates/Zn-485 ZInc Stearate.pdf" },

    { name: "ZN-7585", image: "/ProductImages/ZN_7585_ZINC_STEARATE.png", tds: "/tds/Metallic Sterates/ZN-7585.pdf" },

    { name: "ZN-8595", image: "/ProductImages/ZN_8595_ZINC_STEARATE.png", tds: "/tds/Metallic Sterates/Zn-8595.pdf" },

    { name: "ZN-9595", image: "/ProductImages/ZN_9595_ZINC_STEARATE.png", tds: "/tds/Metallic Sterates/ZN-9595.pdf" },
  ],
}
    ],
  },

  // ===== Lubricants =====
  {
    name: "Lubricants",
    types: [
      {
        name: "Products",
        products: [
          { name: "PE-WAX H-110", image: "/ProductImages/TEPELUB_H110_PE-WAX.png", tds: "/tds/Lubricants/PE Wax H-110.pdf" },
          { name: "TEPELUB 132", image: "//ProductImages/TEPELUB_132_PE-WAX.png", tds: "/tds/Lubricants/Tepelub 132 .pdf" },
        ],
      },
    ],
  },

  // ===== Rubber Additives =====
  {
    name: "Rubber Additives",
    types: [
      {
  name: "Products",
  products: [
    { name: "ANTITACK TP 130", image: "/ProductImages/Antitack_TP_130.png", tds: "/tds/Rubber Additives/Antitack TP 130.pdf" },
    { name: "ANTITACK TP 131", image: "/ProductImages/Antitack_TP_131.png", tds: "/tds/Rubber Additives/Antitack TP 131.pdf" },
    { name: "ANTITACK TP 133-MG", image: "/ProductImages/Antitack_TP_133_MG.png", tds: "/tds/Rubber Additives/Antitack TP 133 - MG.pdf" },
    { name: "HYGROSCOPE GR", image: "/ProductImages/HYGROSCOPE_GR.png", tds: "/tds/Rubber Additives/HYGROSCOPE GR.pdf" },
    { name: "HYGROSCOPE PW", image: "/ProductImages/HYGROSCOPE_PW.png", tds: "/tds/Rubber Additives/HYGROSCOPE PW.pdf" },
    { name: "HYGROSCOPE P CaO", image: "/ProductImages/HYGROSCOPE_P.png", tds: "/tds/Rubber Additives/HYROSCOPE P  CaO .pdf" },
    { name: "KRESBY TP 316 FL", image: "/ProductImages/Kresby_TP_316_FL.png", tds: "/tds/Rubber Additives/Kresby TP 316 FL .pdf" },
    { name: "KRESBY TP 342", image: "/ProductImages/Kresby-TP_342.png", tds: "/tds/Rubber Additives/Kresby TP 342.pdf" },
    { name: "KRESBYGRAN S-80", image: "/ProductImages/KRESBYGRAN_S_80.png", tds: "/tds/Rubber Additives/KRESBYGRAN S-80.pdf" },
    { name: "NOVAREZ TP 35", image: "/ProductImages/Novarez_TP_35.png", tds: "/tds/Rubber Additives/Novarez TP 35.pdf" },
  ],
}
    ],
  },

  // ===== Liquid Stabilizers =====
  {
    name: "Liquid Stabilizers",
    types: [
      {
        name: "Products",
        products: [
          { name: "COMPLEX STAB Ba Cd Zn", image: "/ProductImages/liquid 1.png", tds: "/tds/Liquid Stabilizer/Complex Stab Ba Cd Zn.pdf" },
          { name: "COMPLES STAB TP BZ", image: "/ProductImages/liquid 2.png", tds: "/tds/Liquid Stabilizer/Complex Stab TP BZ.pdf" },
        ],
      },
    ],
  },

  // ===== Calcium Oxide =====
  {
    name: "Calcium Oxide",
    types: [
      {
        name: "Products",
        products: [
          { name: "HYGROSCOPE-P", image: "/ProductImages/CA1.png", tds: "/tds/Calcium Oxide/Hygroscope P .pdf" },
          { name: "HYGROSCOPE-GR", image: "/ProductImages/CA2.png", tds: "/tds/HYGROSCOPE-GR.pdf" },
        ],
      },
    ],
  },

  // ===== Zinc Oxide =====
  {
    name: "Zinc Oxide",
    types: [
      {
        name: "Products",
        products: [
          { name: "ZINC OXIDE", image: "/ProductImages/ZINC OXIDE.png", tds: "/tds/Zinc Oxide/Zinc Oxide.pdf" },
        ],
      },
    ],
  },

  // ===== Pigments Organic =====
  {
    name: "Pigments Organic",
    types: [
      {
        name: "Green C.I No 7",
        products: [
          { name: "GREEN-7-RF700", image: "/ProductImages/Green.png", tds: "/tds/Pigments Organic/GREEN C.I NO 7/GREEN-7-RF700.pdf" },
          { name: "GREEN-7-RF701", image: "/ProductImages/Green.png", tds: "/tds/Pigments Organic/GREEN C.I NO 7/GREEN-7-RF701.pdf" },
          { name: "GREEN-7-RF702", image: "/ProductImages/Green.png", tds: "/tds/Pigments Organic/GREEN C.I NO 7/GREEN-7-RF702.pdf" },
          { name: "GREEN-7-RF703", image: "/ProductImages/Green.png", tds: "/tds/Pigments Organic/GREEN C.I NO 7/GREEN-7-RF703.pdf" },
          { name: "GREEN-7-RF704", image: "/ProductImages/Green.png", tds: "/tds/Pigments Organic/GREEN C.I NO 7/GREEN-7-RF704.pdf" },
          { name: "GREEN-7-RF705", image: "/ProductImages/Green.png", tds: "/tds/Pigments Organic/GREEN C.I NO 7/GREEN-7-RF705.pdf" },
          { name: "GREEN-7-RF706", image: "/ProductImages/Green.png", tds: "/tds/Pigments Organic/GREEN C.I NO 7/GREEN-7-RF706.pdf" },
          { name: "GREEN-7-RF707", image: "/ProductImages/Green.png", tds: "/tds/Pigments Organic/GREEN C.I NO 7/GREEN-7-RF707.pdf" },
          { name: "GREEN-7-RF708", image: "/ProductImages/Green.png", tds: "/tds/Pigments Organic/GREEN C.I NO 7/GREEN-7-RF708.pdf" },
        ],
      },
            {
        name: "Blue C.I No 150",
        products: [
          { name: "ALPHA-BLUE-150-RF600", image: "/ProductImages/15 0.png", tds: "/tds/Pigments Organic/BLUE C.I NO 15 0/ALPHA-BLUE-150-RF600.pdf" },
          { name: "ALPHA-BLUE-150-RF601", image: "/ProductImages/15 0.png", tds: "/tds/Pigments Organic/BLUE C.I NO 15 0/ALPHA-BLUE-150-RF601.pdf" },
        ],
      },
      {
        name: "Blue Crude",
        products: [
          { name: "Activated CPC Blue RF-606", image: "/ProductImages/Blue Crude.png", tds: "/tds/Pigments Organic/BLUE CRUDE/ACTIVATED-CPC-BLUE RF606.pdf" },
          { name: "CPC Blue RF-606", image: "/ProductImages/Blue Crude.png", tds: "/tds/Pigments Organic/BLUE CRUDE/CPC-BLUE-RF605.pdf" },
        ],
      },
      {
        name: "Blue C.I No 151",
        products: [
          { name: "ALPHA-BLUE-151-RF602", image: "/ProductImages/15 1.png", tds: "/tds/Pigments Organic/BLUE C.I NO 15 1/ALPHA-BLUE-151-RF602.pdf" },
        ],
      },
      {
        name: "Blue C.I No 153",
        products: [
          { name: "BETA-BLUE-153-RF603", image: "/ProductImages/15 3.png", tds: "/tds/Pigments Organic/BLUE C.I NO 15 3/BETA-BLUE-153-RF603.pdf" },
        ],
      },
      {
        name: "Blue C.I No 154",
        products: [
          { name: "BETA-BLUE-154-RF604", image: "/ProductImages/15 4.png", tds: "/tds/Pigments Organic/BLUE C.I NO 15 4/BETA-BLUE-154-RF604.pdf" },
        ],
      },
    ],
  },

  // ===== Lead Oxide =====
  {
    name: "Lead Oxide",
    types: [
      {
        name: "Products",
        products: [
          { name: "LEAD OXIDE YELLOW", image: "/ProductImages/Lead Oxide yellow.png", tds: "/tds/Lead Oxide/LEAD OXIDE YELLOW.pdf" },
          { name: "LEAD OXIDE RED", image: "/ProductImages/Lead Oxide red.png", tds: "/tds/Lead Oxide Red.pdf" },
        ],
      },
    ],
  },

  // ===== Pigments Inorganic =====
  {
    name: "Pigments Inorganic",
    types: [
      {
        name: "Products",
        products: [
          // Currently empty; add images/PDFs when available
        ],
      },
    ],
  },

  // ===== Calcium Carbonate =====
  {
    name: "Calcium Carbonate",
    types: [
      {
        name: "Products",
        products: [
          // Currently empty
        ],
      },
    ],
  },

  // ===== Carbon Black =====
  {
    name: "Carbon Black",
    types: [
      {
        name: "Products",
        products: [
          // Currently empty
        ],
      },
    ],
  },

  // ===== Titanium Dioxide =====
  {
    name: "Titanium Dioxide",
    types: [
      {
        name: "Products",
        products: [
          // Currently empty
        ],
      },
    ],
  },

  // ===== PVC Resin =====
  {
    name: "PVC Resin",
    types: [
      {
        name: "Products",
        products: [
          // Currently empty
        ],
      },
    ],
  },

  // ===== Polyethylene =====
  {
    name: "Polyethylene",
    types: [
      {
        name: "Products",
        products: [
          // Currently empty
        ],
      },
    ],
  },

  // ===== AC Blowing Agent =====
  {
    name: "AC Blowing Agent",
    types: [
      {
        name: "Products",
        products: [
          // Currently empty
        ],
      },
    ],
  },
];

export default function ProductsPage(){



const [activeCategory,setActiveCategory] = useState(products[0])

const [activeType,setActiveType] = useState(products[0].types[0])

const [activeGroup,setActiveGroup] = useState(null)

const [search,setSearch] = useState("")



useEffect(()=>{

if(activeType.groups){

setActiveGroup(activeType.groups[0])

}else{

setActiveGroup(null)

}

},[activeType])



const displayProducts =

activeGroup?.products ||

activeType.products ||

[]



const filteredProducts = displayProducts.filter(p =>

p.name.toLowerCase().includes(search.toLowerCase())

)



return(



<div className="min-h-screen bg-gray-50">



<div className="max-w-7xl mx-auto flex">



{/* SIDEBAR */}



<div className="w-64 bg-white border-r p-6">



<h2 className="font-bold text-lg mb-6">

Product Categories

</h2>



<div className="space-y-2">



{products.map(cat=>(

<button

key={cat.name}

onClick={()=>{

setActiveCategory(cat)

setActiveType(cat.types[0])

}}

className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition

${activeCategory.name===cat.name

? "bg-green-600 text-white"

: "hover:bg-gray-100"

}`}

>

{cat.name}

</button>

))}



</div>



</div>





{/* MAIN AREA */}



<div className="flex-1 p-10">



{/* BREADCRUMB */}



<div className="text-sm text-gray-500 mb-6">



{activeCategory.name} / {activeType.name}

{activeGroup && ` / ${activeGroup.name}`}



</div>





{/* SEARCH */}



<div className="relative max-w-md mb-8">



<Search className="absolute left-3 top-3 text-gray-400"/>



<input

type="text"

placeholder="Search product..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="w-full pl-10 pr-4 py-2 border rounded-lg"

/>



</div>





{/* TYPE NAVIGATION */}



<div className="flex flex-wrap gap-3 mb-6">



{activeCategory.types.map(type=>(

<button

key={type.name}

onClick={()=>setActiveType(type)}

className={`px-4 py-2 rounded-full text-sm font-medium transition

${activeType.name===type.name

? "bg-green-600 text-white"

: "bg-white border hover:bg-gray-100"

}`}

>

{type.name}

</button>

))}



</div>





{/* GROUP NAVIGATION */}



{activeType.groups && (



<div className="flex flex-wrap gap-3 mb-8">



{activeType.groups.map(group=>(

<button

key={group.name}

onClick={()=>setActiveGroup(group)}

className={`px-4 py-2 rounded-full text-sm font-medium transition

${activeGroup?.name===group.name

? "bg-green-100 text-green-700"

: "bg-white border hover:bg-gray-100"

}`}

>

{group.name}

</button>

))}



</div>



)}





{/* PRODUCT GRID */}



<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">



{filteredProducts.map((product,index)=>(



<div

key={index}

className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"

>



<div className="relative h-48 mb-4 rounded-lg overflow-hidden">



<Image
  src={product.image}
  alt={product.name}
  fill
  className="object-cover"
/>


</div>



<h3 className="font-semibold text-lg mb-4">

{product.name}

</h3>



<div className="flex gap-2">



<Link

href="/contact"

className="flex-1 bg-green-600 text-white text-center py-2 rounded-md text-sm hover:bg-green-700"

>

Get Quote

</Link>



<a
  href={product.tds}   // <-- this points to the PDF path
  target="_blank"       // open in a new tab
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-3 border border-green-600 text-green-600 rounded-md text-sm hover:bg-green-100"
>
  <Download size={16} />
  TDS
</a>



</div>



</div>



))}



</div>



</div>



</div>



</div>



)

}

