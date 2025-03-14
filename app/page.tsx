import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Lock, Banknote } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gradient-bg">
      <SiteHeader />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Shield className="h-16 w-16 text-primary animate-pulse" />
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Secure Transactions Made Simple
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              MediatorPro ensures safe and trustworthy transactions between buyers and sellers with our secure escrow service.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/auth/register">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary/20 hover:bg-primary/10">
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-secondary/50 backdrop-blur-sm p-2 transition-all hover:border-primary/40 hover:bg-secondary/80">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <CheckCircle className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold text-primary">Secure Escrow</h3>
                  <p className="text-sm text-muted-foreground">
                    Your funds are held safely until both parties are satisfied.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-secondary/50 backdrop-blur-sm p-2 transition-all hover:border-primary/40 hover:bg-secondary/80">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Lock className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold text-primary">Protected Transactions</h3>
                  <p className="text-sm text-muted-foreground">
                    Dispute resolution and buyer protection included.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-secondary/50 backdrop-blur-sm p-2 transition-all hover:border-primary/40 hover:bg-secondary/80">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Banknote className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold text-primary">Multiple Payment Methods</h3>
                  <p className="text-sm text-muted-foreground">
                    Support for both fiat and cryptocurrency payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-primary/20 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Shield className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with security in mind. © 2024 MediatorPro.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}