"use client"

import useSWR from "swr"
import { CalendarDays, ArrowRight, RefreshCw } from "lucide-react"

interface NewsItem {
  id: string
  title: string
  summary: string
  date: string
  category: string
  source?: string
}

interface UpdatesResponse {
  updates: NewsItem[]
  lastUpdated: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

function formatRelativeTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

const categoryColors: Record<string, string> = {
  "Tax Update": "bg-accent/15 text-accent",
  "Legislative": "bg-primary/10 text-primary",
  "State Law": "bg-foreground/10 text-foreground",
  "Planning Insight": "bg-accent/15 text-accent",
}

export function EstateUpdates() {
  const { data, isLoading, mutate } = useSWR<UpdatesResponse>(
    "/api/updates",
    fetcher,
    { refreshInterval: 60000 }
  )

  return (
    <section id="updates" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.25em] text-accent uppercase">
              Real-Time Updates
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
              Estate Planning & Trust News
            </h2>
            <div className="mt-4 h-px w-16 bg-accent" />
          </div>

          <div className="flex items-center gap-3">
            {data?.lastUpdated && (
              <span className="text-xs text-muted-foreground">
                Updated {formatRelativeTime(data.lastUpdated)}
              </span>
            )}
            <button
              type="button"
              onClick={() => mutate()}
              className="flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-card"
              aria-label="Refresh updates"
            >
              <RefreshCw className="h-3 w-3" />
              Refresh
            </button>
          </div>
        </div>

        {/* Updates list */}
        <div className="mt-12">
          {isLoading ? (
            <div className="flex flex-col gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="animate-pulse rounded-sm border border-border bg-card p-6"
                >
                  <div className="mb-3 h-4 w-24 rounded bg-muted" />
                  <div className="mb-2 h-6 w-3/4 rounded bg-muted" />
                  <div className="h-4 w-full rounded bg-muted" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-0">
              {data?.updates.map((item, index) => (
                <article
                  key={item.id}
                  className={`group flex flex-col gap-4 border-b border-border py-8 transition-colors md:flex-row md:items-start md:gap-8 ${index === 0 ? "border-t" : ""}`}
                >
                  {/* Date column */}
                  <div className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground md:w-40">
                    <CalendarDays className="h-4 w-4" />
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <span
                        className={`rounded-sm px-2.5 py-0.5 text-xs font-medium ${categoryColors[item.category] ?? "bg-muted text-muted-foreground"}`}
                      >
                        {item.category}
                      </span>
                      {item.source && (
                        <span className="text-xs text-muted-foreground">
                          {item.source}
                        </span>
                      )}
                    </div>
                    <h3 className="mb-2 font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden shrink-0 pt-1 md:block">
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-muted-foreground">
          These updates are provided for informational purposes only and do not
          constitute legal or tax advice. Consult with our attorneys for
          guidance specific to your situation.
        </p>
      </div>
    </section>
  )
}
