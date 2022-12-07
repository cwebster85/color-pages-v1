import colors from '../data/colors.json'
// import styles from '../styles/Color.module.css'

//STEP 3: create the React component
export default function Color({ color }) {
    return <div className='color-page' style={{ backgroundColor: color.hex }}>
        <h1>{color.name}</h1>
    </div>
}

//STEP 1: create the paths
export async function getStaticPaths() {
    const paths = colors.map(color => {
        return {
            params: { color: color.name }
        }
    })
    return { paths, fallback: false }
}

//STEP 2: create the props
export async function getStaticProps({ params }) {
    const color = colors.find(color => color.name === params.color)
    return { props: { color }}
}

//FOR PATHS
// // [color].js
// // import the colors array
// import colors from '../data/colors.json'

// export async function getStaticPaths() {
//   // loop through the colors array
//   const paths = colors.map(color => ({
//     // return an object with params.color set to the color's name
//     params: { color: color.name }
//   }))

//   // Paths will look like this:
//   // [
//   //   { params: { color: 'Marsala' } },
//   //   { params: { color: 'Illuminating'} }
//   //   ...
//   // ]
//   return { paths, fallback: false }
// }


//FOR PROPS
// // [color].js
// export async function getStaticProps({ params }) {
//     // find the info for just one color
//     const color = colors.find(color => color.name === params.color)
//     // return it in the necessary format.
//     return { props: { color } }
//   }


//FOR APIs FETCHING:
// export async function getServerSideProps({ params }) {
//     // Make a request to get data about the color via our API
//     const res = await fetch(`http://www.color-api.com/${params.color}`)
//     const color = await fetch.json()
//     // return the data as props that will be passed to the Color component
//     return { props: { color } }
//   }