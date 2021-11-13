
type AppAction =
| { type: 'CHANGE_THEME' }
| { type: 'CHANGE_LANGUAGE' }
// | { type: 'UPDATE_MY_POKEMON_LIST', data: MyPokemon[] }
| { type: string, data: any } // eslint-disable-line

type AppDispatch = (action: AppAction) => void

type Member = {
  name: string
  account: Characted[]
}

type Character = {
  ign: string
  level: string
  job: 'WS' | 'Sniper' | 'AC' | 'HW' | 'HP' | 'LK'
}

type AppState = {
  darkMode: boolean;
  language: 'id' | 'en'
  member: Member[]
}
