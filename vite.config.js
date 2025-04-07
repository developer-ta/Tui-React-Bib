// vite.config.js  
import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';  

export default defineConfig({  
  plugins: [react()],  
  build: {  
    lib: {  
      entry: 'src/component/index.jsx', // Assurez-vous que ce chemin est correct  
      name: 'TuiReactBib',  
      fileName: (format) => `tui-react-bib.${format}.js`,  
    },  
    rollupOptions: {  
      external: ['react', 'react-dom'],  
      output: {  
        globals: {  
          react: 'React',  
          'react-dom': 'ReactDOM',  
        },  
      },  
    },  
  },  
});  