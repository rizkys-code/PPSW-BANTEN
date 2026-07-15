import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Leaf1 } from './Decorations';

export default function ProgramCard({ program, onOpenDetails }) {
  const IconComponent = program.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-[28px] bg-white dark:bg-zinc-900/80 border border-secondary/10 dark:border-white/5 hover:border-primary/30 dark:hover:border-accent/30 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 select-none text-left overflow-hidden h-full premium-card premium-card-hover"
    >
      {/* Decorative leaf sketch in the card corner */}
      <Leaf1 className="absolute -right-4 -top-4 text-primary/10 w-24 h-24 rotate-[75deg] group-hover:rotate-[90deg] group-hover:scale-110 transition-all duration-500" />

      <div>
        {/* Animated Icon Ring */}
        <div className={`w-13 h-13 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${program.gradient} text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-5.5 h-5.5" />
        </div>

        {/* Title using serif font */}
        <h3 className="font-serif font-extrabold text-xl text-secondary dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
          {program.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3.5 text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed font-normal text-justify">
          {program.description}
        </p>
      </div>

      {/* Action Trigger */}
      <div className="mt-8 pt-4 border-t border-secondary/5 dark:border-white/5">
        <button
          onClick={() => onOpenDetails(program)}
          className="inline-flex items-center text-xs sm:text-sm font-extrabold text-primary dark:text-accent group/btn focus:outline-none cursor-pointer"
        >
          Pelajari Detail Layanan
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
        </button>
      </div>

      {/* Tiny decorative gradient indicator */}
      <div className={`absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r ${program.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`} />
    </motion.div>
  );
}

