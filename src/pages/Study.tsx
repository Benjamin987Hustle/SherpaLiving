import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Data: Programs Configuration ---
const programs = [
  {
    id: 'htw',
    title: 'Prep-for-Study (HTW Saar)',
    category: 'University',
    location: 'Germany',
    image: '/Images/htw_saar.jpeg',
    description: 'Pathway to engineering degrees in Germany. 1 year preparation for seamless university entry.',
    link: '/htw',
    tags: ['Engineering', 'University Prep', 'German']
  },
  {
    id: 'trulli',
    title: 'Trulli Italian School',
    category: 'Language',
    location: 'Italy',
    image: '/Images/Image_trulli/trulli_1.png',
    description: 'Immersive Italian language summer camp in the beautiful UNESCO town of Alberobello.',
    link: '/trulli',
    tags: ['Italian', 'Summer Camp', 'Culture']
  },
  {
    id: 'swiss-language',
    title: 'Swiss Language Club',
    category: 'Language',
    location: 'Switzerland',
    image: '/Images/Image_SEA/sea_2.png',
    description: 'Learn French or English in the Swiss Alps. Adventure, sports, and language classes combined.',
    link: '/swiss-language',
    tags: ['French', 'English', 'Adventure']
  },
  {
    id: 'swiss-business',
    title: 'Swiss Business & Hospitality',
    category: 'Career',
    location: 'Switzerland',
    image: '/Images/Image_SEA/sea_buisness_1.jpg',
    description: 'Introduction to Hospitality and Business Management. Develop leadership skills in a premium setting.',
    link: '/swiss-business',
    tags: ['Hospitality', 'Business', 'Leadership']
  },
  {
    id: 'les-elfes',
    title: 'Les Elfes International',
    category: 'Camp',
    location: 'Switzerland',
    image: '/Images/Images_Les_Elfes/elfes_musée.png', // Using one of the hero images
    description: 'World-renowned summer camps focusing on personal development, outdoor activities, and fun.',
    link: '/les-elfes',
    tags: ['Summer Camp', 'Outdoor', 'International']
  },
  {
    id: 'leman',
    title: 'Léman Summer Camp',
    category: 'Camp',
    location: 'Switzerland',
    image: '/Images/Image_Leman/campus_leman_1.jpg',
    description: 'Premium boarding school summer experience. Excellence in education and activities on Lake Geneva.',
    link: '/leman-summer-camp',
    tags: ['Boarding School', 'Summer Camp', 'Lake Geneva']
  },
  {
    id: 'swiss-culinary',
    title: 'Swiss Culinary Club',
    category: 'Career',
    location: 'Switzerland',
    image: '/Images/Image_SEA/Sea_Culinary_2.png',
    description: 'Discover the art of cooking with professional chefs. A tasty mix of culinary arts and Swiss adventures.',
    link: '/swiss-culinary',
    tags: ['Cooking', 'Culinary Arts', 'Chocolate']
  },
  {
    id: 'ba-acting',
    title: 'BA Acting (RCS)',
    category: 'University',
    location: 'UK',
    image: '/Images/rcs_1.png',
    description: 'Intensive acting training at the Royal Conservatoire of Scotland. Prepare for a career in theatre, screen, and radio.',
    link: '/ba-acting',
    tags: ['Acting', 'Drama', 'Conservatoire']
  }
];

// --- Components ---

const FilterButton = ({ active, label, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${active
      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
      : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600'
      }`}
  >
    {label}
  </button>
);

const ProgramCard = ({ program }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
    <div className="relative h-48 overflow-hidden">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
        {program.location}
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="mb-4">
        <span className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2 block">
          {program.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-700 transition-colors">
          {program.title}
        </h3>
      </div>
      <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">
        {program.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {program.tags.map((tag, idx) => (
          <span key={idx} className="bg-gray-50 text-gray-500 text-xs px-2 py-1 rounded-md border border-gray-100">
            #{tag}
          </span>
        ))}
      </div>

      <Link
        to={program.link}
        className="w-full block text-center py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-blue-600 transition-colors"
      >
        Discover Program
      </Link>
    </div>
  </div>
);

const Study = () => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');

  const categories = ['All', 'University', 'Camp', 'Language', 'Career'];
  const locations = ['All', 'Switzerland', 'Germany', 'Italy', 'UK'];

  const filteredPrograms = programs.filter(program => {
    const matchCategory = filterCategory === 'All' || program.category === filterCategory || (filterCategory === 'Camp' && program.category === 'Summer Camp'); // Handle slight mapping diffs if any, but simplified here
    const matchLocation = filterLocation === 'All' || program.location === filterLocation;
    return matchCategory && matchLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Find Your Perfect Experience
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our curated collection of world-class educational programs, from summer camps in the Swiss Alps to university preparation in Germany.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Mobile-friendly scrollable filter container */}
          <div className="flex flex-col md:flex-row md:justify-center gap-4 md:items-center">

            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar">
              <span className="md:hidden text-xs font-bold text-gray-400 self-center mr-2 uppercase">Type:</span>
              {categories.map(cat => (
                <FilterButton
                  key={cat}
                  label={cat}
                  active={filterCategory === cat}
                  onClick={() => setFilterCategory(cat)}
                />
              ))}
            </div>

            <div className="hidden md:block w-px h-8 bg-gray-200"></div>

            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar">
              <span className="md:hidden text-xs font-bold text-gray-400 self-center mr-2 uppercase">Loc:</span>
              {locations.map(loc => (
                <FilterButton
                  key={loc}
                  label={loc}
                  active={filterLocation === loc}
                  onClick={() => setFilterLocation(loc)}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Available Programs <span className="text-gray-400 font-normal text-lg ml-2">({filteredPrograms.length})</span>
          </h2>
        </div>

        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-lg font-medium text-gray-900">No programs found</h3>
            <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
            <button
              onClick={() => { setFilterCategory('All'); setFilterLocation('All'); }}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Study;
