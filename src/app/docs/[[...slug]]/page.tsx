const DocsContent = ({params}: {
    params: {
        slug: string[]
    }
}) => {
    if (params.slug?.length === 2) {
        return <h1>فیچر {params.slug[0]} کانسپت {params.slug[1]}</h1>
    }
    if (params.slug?.length === 1) {
        return <h1>فیچر {params.slug[0]}</h1>
    }
    return <h1>سلام</h1>
}

export default DocsContent;