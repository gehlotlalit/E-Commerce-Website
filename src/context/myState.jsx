/* eslint-disable react/prop-types */
import MyContext from './myContext';

function MyState({children}) {
    const name = "Lalit Malviya Gehlot"
  return (
    <MyContext.Provider value={name}>
       {children}
    </MyContext.Provider>
  )
}

export default MyState