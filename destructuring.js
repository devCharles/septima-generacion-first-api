
const request = {
  body: {
    // name: 'charles',
    generation: 7,
    age: 24,
    phone: undefined,
    gender: 'male',
    email: 'bla@bla.bla'
  }
}

// Deconstrucción (ES6)

// ------- decostrucción de objeto -------

// const { atributos que quiero obtener } = el objeto a deconstruir (del que quiero sacar atributos)
const { name, generation } = request.body
console.log('name: ', name)
console.log('generation: ', generation)

// Renombramiento en la deconstruccion
// se usa el operador (:)
// lado izquierdo es el nombre del atributo como esta en el objeto
// lado derecho es el nombre deseado
const { name:koderName, age:koderAge } = request.body
console.log('koderName: ', koderName)

// Dar un valor por defecto
// se usa el operador de asignacion (=)
const { phone = '5555555555'  } = request.body
console.log('phone: ', phone)

// todo junto
const { name: mentorName = 'Isra' } = request.body
console.log('mentorName:', mentorName)

// buenas practicas
// usar varias lineas al deconstruir mas de 2 atributos de un objeto
/* 
const { name: dudeName = 'dude', phone, age: dudeAge = 18, generation } = request.body // NO
const {
  name: dudeName = 'dude',
  phone,
  age: dudeAge = 18,
  generation
} = request.body // SI
*/

// -----------------------------------------------------------------------------
// Deconstruccion de arreglo
const koders = [ 'Mar', 'Elvira', 'Airy', 'Fer' ]
const mentors = [
  {
    name: 'Isra'
  },
  {
    name: 'David'
  },
  {
    name: 'Charles'
  }
]

// const [ elementosPosicionales que quiero del arreglo ] = arreglo a ser deconstruido

const [ x,y,z,a,b ] = koders
console.log('b:', b)

const { name: mentorNameNew } = mentors[0]
const [{ name: newName }] = mentors

console.log('newName: ', newName)

console.log('------------- rest & spread --------------')
// spread y rest operator (...)
// spread es esparcir, nos ayuda a sacar los valores de un objeto
// rest rest nos ayuda a agrupar el resto de atributos/miembros en un solo contenedor

// rest operator (...), se caracteriza porque se usa dentro de una deconstruccion, 
// de lado izquierdo del igual
const { email, ...restoDelObjeto } = request.body
console.log('email: ', email)
console.log('restoDelObjeto: ', restoDelObjeto) // tipo objeto

// Arrays
const [ unKoder, otroKoder, ...restoDelArreglo ] = koders
console.log('unKoder: ', unKoder)
console.log('restoDelArreglo: ', restoDelArreglo)

// spread operator (...) pero de lado derecho del igual

const koderPersonal = {
  name: 'name',
  age: 'age'
}

const koderKodemiaInfo = {
  generation: 7,
  fechaDeIngreso: new Date()
}

const koderCompleto = { ...koderPersonal, ...koderKodemiaInfo }
console.log('koderCompleto: ', koderCompleto)

const koderMasCompleto = {
  colorFav: 'azul',
  peliculaFav: 'Dora la exploradora',
  ...koderCompleto
}
console.log('koderMasCompleto: ', koderMasCompleto)

// Array
const sextaGen = [ 'Adan', 'Itiel', 'Luis' ]
const septimaGen = [ 'Fer', 'Omar', 'Elvira' ]

const sextaYSeptima = [ ...sextaGen, ...septimaGen, 'ultimo' ]
const septimaYsexta = [ 'inicial', ...septimaGen, 'enmedio', ...sextaGen, 'final' ]
console.log('sextaYSeptima:' ,sextaYSeptima)
console.log('septimaYsexta:' ,septimaYsexta)
