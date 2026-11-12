import { useEffect, useState } from 'react';
import { Expand, X } from 'lucide-react';
import { CAMPUS_GALLERY, CampusPhoto } from '../data/cerecData';

export function CampusGallerySection() {
  const [activePhoto, setActivePhoto] = useState<CampusPhoto | null>(null);

  useEffect(() => {
    if (!activePhoto) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePhoto(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activePhoto]);

  const landscapePhotos = CAMPUS_GALLERY.filter(
    (p) => p.orientation === 'landscape'
  );
  const portraitPhotos = CAMPUS_GALLERY.filter(
    (p) => p.orientation === 'portrait'
  );

  return (
    <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#c58b12] mb-2">
              Vie du campus
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b1f3f]">
              CEREC-ISCOM en images
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Découvrez nos locaux à Pointe-Noire, nos salles de formation et les
            temps forts de la vie étudiante.
          </p>
        </div>

        {/* Row 1: Featured Landscape Campus Photo + Editorial Context */}
        {landscapePhotos.length === 1 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-stretch">
            {landscapePhotos.map((photo) => (
              <figure
                key={photo.id}
                className="lg:col-span-7 group bg-[#f8f9fb] border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActivePhoto(photo)}
                  className="relative block w-full h-full min-h-[220px] sm:min-h-[260px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11] overflow-hidden bg-[#0b1f3f] cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3f]"
                  aria-label={`Agrandir : ${photo.caption}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#07142b]/80 via-transparent to-transparent"
                  />
                  <span className="absolute top-3.5 right-3.5 w-9 h-9 rounded-lg bg-white/90 text-[#0b1f3f] flex items-center justify-center opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-150">
                    <Expand className="w-4 h-4" />
                  </span>
                  <figcaption className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="block text-xs font-medium text-[#e0a526] mb-0.5">
                      {photo.category}
                    </span>
                    <span className="font-serif text-lg font-semibold leading-snug block">
                      {photo.caption}
                    </span>
                  </figcaption>
                </button>
              </figure>
            ))}

            <div className="lg:col-span-5 bg-[#f8f9fb] border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#c58b12] mb-2">
                  Pointe-Noire · Brazzaville
                </p>
                <h3 className="font-serif text-2xl font-bold text-[#0b1f3f] leading-snug">
                  Un campus vivant, ancré dans la réussite étudiante
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  De l&apos;accueil sur nos campus aux cérémonies de remise de
                  distinctions académiques, le groupe CEREC-ISCOM accompagne chaque
                  promotion avec proximité, exigence et ouverture professionnelle.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Agréé par l&apos;État · Enseignement supérieur</span>
                <a
                  href="#contact"
                  className="font-semibold text-[#0b1f3f] hover:text-[#c58b12] transition-colors whitespace-nowrap"
                >
                  Visiter le campus →
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {landscapePhotos.map((photo) => (
              <figure
                key={photo.id}
                className="group bg-[#f8f9fb] border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActivePhoto(photo)}
                  className="relative block w-full aspect-[16/10] overflow-hidden bg-[#0b1f3f] cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3f]"
                  aria-label={`Agrandir : ${photo.caption}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#07142b]/75 via-transparent to-transparent"
                  />
                  <span className="absolute top-3.5 right-3.5 w-9 h-9 rounded-lg bg-white/90 text-[#0b1f3f] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <Expand className="w-4 h-4" />
                  </span>
                  <figcaption className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="block text-xs font-medium text-[#e0a526] mb-0.5">
                      {photo.category}
                    </span>
                    <span className="font-serif text-lg font-semibold leading-snug block">
                      {photo.caption}
                    </span>
                  </figcaption>
                </button>
              </figure>
            ))}
          </div>
        )}

        {/* Row 2: 3 Portrait campus & ceremony photos with object-top framing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {portraitPhotos.map((photo) => (
            <figure
              key={photo.id}
              className="group bg-[#f8f9fb] border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActivePhoto(photo)}
                className="relative block w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#0b1f3f] cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3f]"
                aria-label={`Agrandir : ${photo.caption}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#07142b]/85 via-[#07142b]/15 to-transparent"
                />
                <span className="absolute top-3.5 right-3.5 w-9 h-9 rounded-lg bg-white/90 text-[#0b1f3f] flex items-center justify-center opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-150">
                  <Expand className="w-4 h-4" />
                </span>
                <figcaption className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="block text-xs font-medium text-[#e0a526] mb-0.5">
                    {photo.category}
                  </span>
                  <span className="font-serif text-base font-semibold leading-snug block">
                    {photo.caption}
                  </span>
                </figcaption>
              </button>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for full uncropped photo inspection */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#07142b]/85 backdrop-blur-xs"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              aria-label="Fermer l'image"
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/95 text-[#0b1f3f] flex items-center justify-center hover:bg-white shadow-sm cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-[#0b1f3f] flex items-center justify-center max-h-[70vh] sm:max-h-[75vh]">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] sm:max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="px-4 py-3.5 sm:px-6 sm:py-4 bg-white flex flex-wrap items-center justify-between gap-2">
              <p className="font-serif text-base sm:text-lg font-bold text-[#0b1f3f]">
                {activePhoto.caption}
              </p>
              <span className="text-xs font-medium text-slate-500">
                {activePhoto.category} · CEREC-ISCOM Pointe-Noire
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
