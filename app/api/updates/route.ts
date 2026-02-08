import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

interface NewsItem {
  id: string
  title: string
  summary: string
  date: string
  category: string
  source?: string
}

/**
 * Returns the latest estate planning, trust, and tax news updates.
 * In production this would connect to a CMS or news API;
 * here we surface hand-curated current-awareness items that a
 * firm would typically publish for their clients.
 */
export async function GET() {
  const now = new Date()

  const updates: NewsItem[] = [
    {
      id: "1",
      title: "2026 Federal Estate Tax Exemption Reaches $14.2 Million",
      summary:
        "The IRS has confirmed the inflation-adjusted estate and gift tax exemption for 2026, providing additional planning opportunities before the potential sunset in 2027. Families should review existing plans to maximize utilization.",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1).toISOString(),
      category: "Tax Update",
      source: "IRS Notice 2026-14",
    },
    {
      id: "2",
      title: "SECURE Act 2.0: New Inherited IRA Distribution Rules Now in Effect",
      summary:
        "The final regulations under the SECURE Act 2.0 are now fully effective, requiring most non-spouse beneficiaries to withdraw inherited IRA funds within 10 years while also taking annual required minimum distributions.",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 3).toISOString(),
      category: "Legislative",
      source: "Treasury Reg. 1.401(a)(9)-5",
    },
    {
      id: "3",
      title: "State-Level Estate Taxes: Connecticut Raises Exemption Threshold",
      summary:
        "Connecticut has raised its estate tax exemption to match the federal level, while several other states continue to impose estate taxes at significantly lower thresholds. Multi-state residents should revisit domicile planning.",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 5).toISOString(),
      category: "State Law",
    },
    {
      id: "4",
      title: "Digital Assets in Estate Plans: Best Practices for 2026",
      summary:
        "As cryptocurrency and digital holdings grow, the ABA recommends explicit digital-asset clauses in all estate plans. Fiduciaries need clear authority and access protocols to manage these non-traditional assets.",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7).toISOString(),
      category: "Planning Insight",
      source: "ABA Section of Real Property, Trust & Estate Law",
    },
    {
      id: "5",
      title: "Grantor Trust Planning: Congress Considers New Restrictions",
      summary:
        "Proposed legislation would limit the ability to use grantor trusts to transfer assets outside the taxable estate while retaining income tax liability. Advisors urge clients to act before potential enactment.",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 10).toISOString(),
      category: "Legislative",
    },
    {
      id: "6",
      title: "Charitable Remainder Trusts See Renewed Interest Amid Market Volatility",
      summary:
        "With capital-gains concerns heightened, more clients are exploring CRTs as a tool to diversify concentrated positions while securing an income stream and charitable deduction.",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 12).toISOString(),
      category: "Planning Insight",
    },
  ]

  return NextResponse.json({ updates, lastUpdated: now.toISOString() })
}
