
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Package, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/custom/Header";

export const HomePageClient = () => {
  const stats = [
    { title: "Pedidos Totales", value: "12", icon: ShoppingBag },
    { title: "En Tránsito", value: "2", icon: Package },
    { title: "Total Gastado", value: "$1,842", icon: DollarSign },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <Header title="Bienvenido mi estimado!" subtitle="Puedes comprar, pagar e incluso ordenar algun pedido."/>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pedidos Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "#0012", estado: "Entregado", total: "$299" },
                { id: "#0011", estado: "En tránsito", total: "$89" },
                { id: "#0010", estado: "En tránsito", total: "$1,299" },
              ].map((pedido) => (
                <div key={pedido.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Pedido {pedido.id}</p>
                    <p className="text-xs text-muted-foreground">{pedido.estado}</p>
                  </div>
                  <span className="text-sm font-medium text-foreground">{pedido.total}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Productos Favoritos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Laptop Pro", "Monitor 4K", "Mouse Inalámbrico"].map((producto, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{producto}</span>
                  <Button variant="outline" size="sm">Ver</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

