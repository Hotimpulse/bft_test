import { useReducer } from 'react';
import formStyles from './form.module.css';
import { data } from '@src/data/data';

interface State {
  selectedCountry: string;
  selectedCity: string;
  selectedUni: string;
  selectedAccommodation: string;
}

type Action =
  | { type: 'SET_COUNTRY'; payload: string }
  | { type: 'SET_CITY'; payload: string }
  | { type: 'SET_UNIVERSITY'; payload: string }
  | { type: 'SET_ACCOMMODATION'; payload: string };

const reducer = (state: State, action: Action) => {
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

const initialState: State = {
  selectedCountry: '',
  selectedCity: '',
  selectedUni: '',
  selectedAccommodation: '',
};

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCountrySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_COUNTRY', payload: e.target.value });
  };

  const handleCitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_CITY', payload: e.target.value });
  };

  const handleUniSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_UNIVERSITY', payload: e.target.value });
  };

  const handleAccommodationSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_ACCOMMODATION', payload: e.target.value });
  };

  const selectedCountryList = data.countryList.find(
    (country) => country.name === state.selectedCountry
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert(
      `${state.selectedCountry}, ${state.selectedCity}, ${state.selectedUni}, ${state.selectedAccommodation}`
    );
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      <h1>Form</h1>
      <div className={formStyles.form_container}>
        <label htmlFor="country">Country:</label>
        <select id="country" value={state.selectedCountry} onChange={handleCountrySelect}>
          <option value={''}>Select a country:</option>
          {data.countryList.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        {state.selectedCountry && (
          <>
            <label htmlFor="city">City:</label>
            <select id="city" value={state.selectedCity} onChange={handleCitySelect}>
              <option value={''}>Select a city:</option>
              {selectedCountryList?.cities.map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
            </select>
          </>
        )}

        {state.selectedCity && (
          <>
            <label htmlFor="uni">University type:</label>
            <select id="uni" value={state.selectedUni} onChange={handleUniSelect}>
              <option value={''}>Select a university type:</option>
              {data.univeristyField.map((uni) => (
                <option value={uni} key={uni}>
                  {uni}
                </option>
              ))}
            </select>
          </>
        )}

        {state.selectedCity && state.selectedUni && (
          <>
            <label htmlFor="accommodation">Accommodation:</label>
            <select
              id="accommodation"
              value={state.selectedAccommodation}
              onChange={handleAccommodationSelect}
            >
              <option value={''}>Select accommodation:</option>
              {selectedCountryList?.accommodation.map((acc) => (
                <option value={acc} key={acc}>
                  {acc}
                </option>
              ))}
            </select>
          </>
        )}
      </div>

      {state.selectedCountry &&
        state.selectedCity &&
        state.selectedUni &&
        state.selectedAccommodation && (
          <button type="submit" className={formStyles.submit_button}>
            Выбрать
          </button>
        )}
    </form>
  );
}
