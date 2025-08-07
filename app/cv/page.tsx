import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'CV - Meryem Laalioui',
  description: 'Curriculum Vitae de Meryem Laalioui - Développeuse Informatique',
}

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Print-friendly CV layout */}
      <div className="max-w-4xl mx-auto p-8">
        {/* Header with Photo */}
        <div className="text-center border-b-4 border-amber-600 pb-6 mb-6">
          <div className="flex items-center justify-center gap-6 mb-4">
            {/* Professional Photo */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-amber-300 shadow-lg">
                <Image
                  src="/images/meryem-photo.jpg"
                  alt="Meryem Laalioui - Photo professionnelle"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Name and Title */}
            <div className="text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                MERYEM LAALIOUI
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 font-medium mb-2">
                CÉLIBATAIRE / MAROCAINE
              </p>
              <p className="text-base sm:text-lg text-amber-700 font-semibold">
                Développeuse Informatique
              </p>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm sm:text-base text-gray-600 bg-amber-50 p-3 sm:p-4 rounded-lg">
            <div className="flex items-center justify-center gap-2">
              <span className="text-amber-600">📞</span>
              <span>0600928206</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-amber-600">✉️</span>
              <span className="break-all">meryemlaalioui092@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-amber-600">📍</span>
              <span className="text-center">Rue 528 No 21, Jorf Inezgane</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Languages */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-800 mb-4 border-b-2 border-amber-300 pb-2">
                LANGUES
              </h2>
              <div className="space-y-4">
                {/* Arabic - Native (100%) */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">Arabic:</span>
                    <span className="text-xs sm:text-sm text-gray-600">Natif</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                    <div className="bg-teal-600 h-2 sm:h-3 rounded-full transition-all duration-300" style={{ width: '100%' }}></div>
                  </div>
                </div>

                {/* Tamazight - Native (100%) */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">Tamazight:</span>
                    <span className="text-xs sm:text-sm text-gray-600">Natif</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                    <div className="bg-teal-600 h-2 sm:h-3 rounded-full transition-all duration-300" style={{ width: '100%' }}></div>
                  </div>
                </div>

                {/* English - Fluent (75%) */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">Anglais:</span>
                    <span className="text-xs sm:text-sm text-gray-600">Fluent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                    <div className="bg-teal-600 h-2 sm:h-3 rounded-full transition-all duration-300" style={{ width: '75%' }}></div>
                  </div>
                </div>

                {/* Français - Intermediate (60%) */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">Français:</span>
                    <span className="text-xs sm:text-sm text-gray-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                    <div className="bg-teal-600 h-2 sm:h-3 rounded-full transition-all duration-300" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-800 mb-4 border-b-2 border-amber-300 pb-2">
                COMPÉTENCES
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Langages de programmation:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">PHP</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Bases de données:</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Outils & Environnements:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">VS Code</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">XAMPP</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Git</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Personal Qualities */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-800 mb-4 border-b-2 border-amber-300 pb-2">
                QUALITÉS PERSONNELLES
              </h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Aptitudes à travailler en Équipe
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Sérieuse
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Sens de responsabilité
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Sens de Contact et Communication
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Toujours à l'Heure Précise
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Digne de Confiance
                </li>
              </ul>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <p className="font-semibold text-amber-800">🚗 Permis de conduire (catégorie B)</p>
              </div>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-800 mb-4 border-b-2 border-amber-300 pb-2">
                CENTRES D'INTÉRÊT
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-3">
                <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-center">
                  🍳 Cuisine
                </div>
                <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-center">
                  📚 Lecture
                </div>
                <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-center">
                  🧘 Yoga
                </div>
                <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-center">
                  ✈️ Voyage
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Education */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-800 mb-4 border-b-2 border-amber-300 pb-2">
                FORMATIONS/DIPLÔMES
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      2023-2025
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    Diplôme de Technicien Spécialisé en Développement Informatique
                  </h3>
                  <p className="text-gray-600">
                    Institut Libre des Études Informatiques et Commerciales (ILEIC), Agadir
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Mars-Avril 2025
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    Certificat de participation
                  </h3>
                  <p className="text-gray-600">HUB Régional Dar Al Moukawil</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      2023-2024
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    ATTESTATION DE PARTICIPATION
                  </h3>
                  <p className="text-gray-700 mb-1">Compétition Régionale de l'Innovation – 2ᵉ Édition</p>
                  <p className="text-gray-600">
                    Projet AI ROBOT, en collaboration avec le club scientifique de la Faculté des Sciences
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      2022-2023
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    1ère Année Faculté IBN ZOHR
                  </h3>
                  <p className="text-gray-600">AIT MELLOL en Science Physique (C.U.A.M)</p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      2021-2022
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    Baccalauréat Science Physique
                  </h3>
                  <p className="text-gray-600">HASSAN EL KHYAT Inezgane</p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-800 mb-4 border-b-2 border-amber-300 pb-2">
                EXPÉRIENCES PROFESSIONNELLES
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Mars 2025
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">STAGE</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    Stage en développement informatique
                  </h3>
                  <p className="text-gray-600">GISMA IT SOLUTIONS MAROC – Agadir</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      3 Mois
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Vendeuse</h3>
                  <p className="text-gray-600">
                    Boutique spécialité des Vêtements pour Femme
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      2 Mois
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    Enseignante de soutien scolaire
                  </h3>
                  <p className="text-gray-600">Niveau primaire</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      3 Mois
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    Agent de centre d'appel
                  </h3>
                  <p className="text-gray-600">Centre d'appel arabe</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t-2 border-amber-300 text-center">
          <p className="text-gray-600 mb-2">
            Pour plus d'informations, n'hésitez pas à me contacter
          </p>
          <div className="flex justify-center gap-6 text-amber-700">
            <span>📞 0600928206</span>
            <span>✉️ meryemlaalioui092@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}
