export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">The Spence Bakery</h2>
        <div className="flex justify-center gap-6 mb-8 text-sm text-muted-foreground uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          <a href="#" className="hover:text-primary transition-colors">Email</a>
        </div>
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} The Spence Bakery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
