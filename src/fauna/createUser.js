import { Client, query } from 'faunadb'

import { FAUNA_SECRET } from './faunaKeys'

const createUser = async (user) => {
    const q = query
    const client = new Client({ secret: FAUNA_SECRET, })

    const createUser = client.query(
        q.Create(q.Collection('users'), { data: user, credentials: { password: 'test' } })
    )
    return createUser


}

export default createUser