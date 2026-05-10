import { motion } from "motion/react";

export function Forums() {
  return (
    <div className="w-full bg-white pt-12 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">论坛 <span className="text-zinc-300">FORUMS</span></h1>
          <p className="text-base md:text-lg text-zinc-500 leading-relaxed font-light">
            我们主办或参与的各类学术论坛与研讨会活动。
          </p>
        </motion.div>
      </div>

      <section className="max-w-7xl mx-auto px-6">
        <div className="border-t border-zinc-200 pt-8 text-center text-zinc-400 py-32">
          内容正在更新中...
        </div>
      </section>
    </div>
  );
}