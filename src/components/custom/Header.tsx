interface HeaderProps {
   title?: string;
   subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
   return (
      <div>
         <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h1>
         <p className="text-sm sm:text-base text-muted-foreground mt-1">{subtitle}</p>
      </div>
   )
}
