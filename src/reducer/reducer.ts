export interface State {
  selectedCountry: string;
  selectedCity: string;
  selectedUni: string;
  selectedAccommodation: string;
}

export type Action =
  | { type: 'SET_COUNTRY'; payload: string }
  | { type: 'SET_CITY'; payload: string }
  | { type: 'SET_UNIVERSITY'; payload: string }
  | { type: 'SET_ACCOMMODATION'; payload: string };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_COUNTRY':
      return {
        ...state,
        selectedCountry: action.payload,
        selectedCity: '',
        selectedUni: '',
        selectedAccommodation: '',
      };
    case 'SET_CITY':
      return { ...state, selectedCity: action.payload };
    case 'SET_UNIVERSITY':
      return { ...state, selectedUni: action.payload };
    case 'SET_ACCOMMODATION':
      return { ...state, selectedAccommodation: action.payload };
    default:
      return state;
  }
};

export const initialState: State = {
  selectedCountry: '',
  selectedCity: '',
  selectedUni: '',
  selectedAccommodation: '',
};
