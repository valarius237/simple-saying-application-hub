
import Navbar from "@/components/Navbar";
const About = () => (
  <>
    <Navbar />
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">À propos du musée</h1>
      <p className="text-muted-foreground mb-4">Notre musée s’inspire des plus grands établissements mondiaux. Architecture moderne, présentation interactive, et une collection en permanente évolution : tout est fait pour offrir une expérience inoubliable aux visiteurs, petit·e·s et grand·e·s.</p>
      <div className="flex flex-col md:flex-row gap-6">
        <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=450" alt="Musée" className="rounded-lg shadow-lg w-full md:w-72 h-60 object-cover"/>
        <div>
          <h2 className="font-semibold mb-2">Notre histoire</h2>
          <p>Fondé en 2025, notre musée a pour mission de rendre la culture accessible à tou·te·s, tout en innovant sur la mise en valeur du patrimoine artistique et scientifique.</p>
        </div>
      </div>
    </main>
  </>
);

export default About;
