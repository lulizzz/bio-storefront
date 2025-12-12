import { useConfig } from "@/lib/store";
import { SplitButton } from "./split-button";
import type { ReactNode } from "react";

export function ProductList() {
  const { config } = useConfig();

  // Calculate total number of action buttons across all products to coordinate the animation loop
  const totalButtons = config.products.reduce((acc, product) => acc + product.kits.length, 0);

  let currentGlobalIndex = 0;

  return (
    <div className="space-y-6">
      <Section title="Ofertas Especiais">
        {config.products.map(product => {
          // Capture the start index for this product's kits
          const startIndex = currentGlobalIndex;
          // Increment the global counter for the next product
          currentGlobalIndex += product.kits.length;

          return (
            <SplitButton 
              key={product.id}
              title={product.title} 
              description={product.description}
              image={product.image}
              imageScale={product.imageScale}
              kits={product.kits}
              discountPercent={config.discountPercent}
              startIndex={startIndex}
              totalButtons={totalButtons}
            />
          );
        })}
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-1">
        <h2 className="text-sm font-bold text-foreground/80 uppercase tracking-wider">{title}</h2>
        <div className="h-px bg-border flex-1" />
      </div>
      <div className="space-y-2 px-2">
        {children}
      </div>
    </div>
  );
}
