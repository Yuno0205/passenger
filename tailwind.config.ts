import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
			colors: {
				transparent: 'transparent',
				white: 'white',
				current: 'currentColor',
				brand: {
					50: '#F0F3FF',
					100: '#DBE1FF',
					200: '#C6CFFF',
					300: '#B3BDFF',
					400: '#8A95FF',
					500: '#616BFF',
					600: '#484CD9',
					700: '#3232B3',
					800: '#24208C',
					900: '#1C1666',
					DEFAULT: '#616BFF'
				},
				black: {
					50: 'rgba(0,0,0,0.4)',
					100: 'rgba(0,0,0,0.6)',
					200: 'rgba(0,0,0,0.8)',
					300: 'rgba(0,0,0,0.16)',
					400: 'rgba(0,0,0,0.24)',
					500: 'rgba(0,0,0,0.36)',
					600: 'rgba(0,0,0,0.48)',
					700: 'rgba(0,0,0,0.64)',
					800: 'rgba(0,0,0,0.80)',
					900: 'rgba(0,0,0,0.92)',
					DEFAULT: '#000'
				},
				gray: {
					50: '#F7FAFC',
					100: '#F1F5F9',
					200: '#E2E8F0',
					300: '#CBD5E0',
					400: '#A0AEC0',
					500: '#718096',
					600: '#4A5568',
					700: '#2D3748',
					800: '#1A202C',
					900: '#171923',
					DEFAULT: '#2D3748'
				},
				red: {
					50: '#FFF5F5',
					100: '#FED7D7',
					200: '#FEB2B2',
					300: '#FC8181',
					400: '#F56565',
					500: '#F85A5A',
					600: '#C53030',
					700: '#9B2C2C',
					800: '#822727',
					900: '#63171B',
					DEFAULT: '#F85A5A'
				},
				orange: {
					50: '#FFFAF0',
					100: '#FEEBCB',
					200: '#FBD38D',
					300: '#F6AD55',
					400: '#ED8936',
					500: '#DD6B20',
					600: '#C05621',
					700: '#9C4221',
					800: '#7B341E',
					900: '#63171B',
					DEFAULT: '#DD6B20'
				},
				green: {
					50: '#F0FFF4',
					100: '#C6F6D5',
					200: '#9AE6B4',
					300: '#68D391',
					400: '#48BB78',
					500: '#38A169',
					600: '#25855A',
					700: '#276749',
					800: '#22543D',
					900: '#1C4532',
					DEFAULT: '#38A169'
				},
				blue: {
					50: '#F0FAFF',
					100: '#C7ECFF',
					200: '#9EDBFF',
					300: '#75C8FF',
					400: '#4DB2FF',
					500: '#2494F9',
					600: '#2B6CB0',
					700: '#2C5282',
					800: '#2A4365',
					900: '#1A365D',
					DEFAULT: '#2494F9'
				},
				cyan: {
					50: '#E6FFFC',
					100: '#A3FFF6',
					200: '#7AFFF6',
					300: '#4EF2ED',
					400: '#25E6E6',
					500: '#00D3D9',
					600: '#00A7B3',
					700: '#007E8C',
					800: '#005866',
					900: '#003540',
					DEFAULT: '#00D3D9'
				},
				yellow: {
					50: '#FEFFF0',
					100: '#FEFFE0',
					200: '#FFFFB8',
					300: '#FFFB8F',
					400: '#FFF566',
					500: '#FEEA3D',
					600: '#D9C129',
					700: '#B39919',
					800: '#8C730D',
					900: '#665008',
					DEFAULT: '#FEEA3D'
				}
			},
			boxShadow: {
				'level-1': '0px 1px 2px rgba(0, 0, 0, 0.1)',
				'level-2': '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
				'level-3':
					'0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'level-4':
					'-1px -1px 4px rgba(51, 60, 68, 0.05), 0px 4px 16px -8px rgba(51, 60, 68, 0.16)',
				'level-5':
					'-1px -1px 4px rgba(51, 60, 68, 0.08), 0px 8px 32px -8px rgba(51, 60, 68, 0.18)',
				'level-6':
					'-1px -1px 4px rgba(51, 60, 68, 0.12), 0px 12px 40px -12px rgba(51, 60, 68, 0.25)',
				outline: '0px 0px 0px 3px rgba(117, 200, 255, 0.5)',
				'inner-down': 'inset 0px -1px 0px #E2E8F0',
				'inner-up': 'inset 0px 1px 0px #E2E8F0',
				none: 'none'
			},
			
		}
    
  },
  
 
  plugins: [require('@tailwindcss/forms')],
};
export default config;
