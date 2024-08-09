'use client';

import { lusitana } from '@/app/styles/fonts';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="flex min-h-screen flex-col">
        <main className="grid flex-1 gap-6 p-4 sm:p-6">
          <div className="flex">
            {/* 1 */}
            <div
              className="bg-card text-card-foreground w-full max-w-md rounded-lg border shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Ingredient Inventory
                </h3>
              </div>
              <div className="grid gap-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">1,243</span>
                  <span className="text-muted-foreground">
                    Total Ingredients
                  </span>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary h-2.5 w-2.5 rounded-full"></div>
                      <span>Coffee</span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1">
                      <span>567</span>
                      <span>(46%)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-secondary h-2.5 w-2.5 rounded-full"></div>
                      <span>Fruits</span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1">
                      <span>321</span>
                      <span>(26%)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-accent h-2.5 w-2.5 rounded-full"></div>
                      <span>Grains</span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1">
                      <span>355</span>
                      <span>(28%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
          </div>
        </main>
      </div>
    </main>
  );
}
