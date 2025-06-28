export interface Country {
    name: string;
    code: string;
    flag: string;
}

export const countryOptions: string[] = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 
    'Bangladesh', 'India', 'Pakistan', 'Saudi Arabia', 'UAE'
];

export const stateOptions: string[] = [
    'Texas', 'California', 'Florida', 'New York', 'Illinois', 'Pennsylvania', 'Ohio'
];

export const phoneCountries: Country[] = [
    { name: 'Bangladesh', code: '+880', flag: 'https://flagcdn.com/bd.svg' },
    { name: 'United States', code: '+1', flag: 'https://flagcdn.com/us.svg' },
    { name: 'United Kingdom', code: '+44', flag: 'https://flagcdn.com/gb.svg' },
    { name: 'India', code: '+91', flag: 'https://flagcdn.com/in.svg' },
    { name: 'Canada', code: '+1', flag: 'https://flagcdn.com/ca.svg' },
    { name: 'Australia', code: '+61', flag: 'https://flagcdn.com/au.svg' },
    { name: 'Germany', code: '+49', flag: 'https://flagcdn.com/de.svg' },
    { name: 'Pakistan', code: '+92', flag: 'https://flagcdn.com/pk.svg' },
    { name: 'Saudi Arabia', code: '+966', flag: 'https://flagcdn.com/sa.svg' },
    { name: 'UAE', code: '+971', flag: 'https://flagcdn.com/ae.svg' },
];