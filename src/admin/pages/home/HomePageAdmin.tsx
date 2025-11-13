import { Header } from "@/components/custom/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

export const HomePageAdmin = () => {
  const stats = [
    { title: "Ventas Totales", value: "$45,231", change: "+20.1%", icon: DollarSign },
    { title: "Clientes Activos", value: "2,345", change: "+15.3%", icon: Users },
    { title: "Pedidos", value: "189", change: "+8.2%", icon: ShoppingBag },
    { title: "Tasa de Conversión", value: "3.2%", change: "+2.4%", icon: TrendingUp },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <Header title="Bienvenido" subtitle="Organiza, haz seguimiento y ve resultados." />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              <p className="text-xs text-green-600 mt-1">{stat.change} desde el mes pasado</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Nuevo pedido #00{i}23</p>
                    <p className="text-xs text-muted-foreground">Hace {i} horas</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Productos Populares</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Producto A", "Producto B", "Producto C", "Producto D"].map((product, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{product}</span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {120 - i * 15} ventas
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
