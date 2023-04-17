import { Client, query } from 'faunadb'

import { FAUNA_SECRET } from './faunaKeys'

const createUser = async (user) => {
    const q = query
    const client = new Client({ secret: FAUNA_SECRET, })

    const userQuery = await client.query(
        q.Get(q.Match(q.Index('get_user_by_ref_code'), user.referred_code)
        ))
        .then((ret) => { return ret.data })
        .catch((err) => {
            return null
    })

    const userData = {
        ...user,
        referred_by: userQuery.email
    }

    const createUser = client.query(
        q.Create(q.Collection('users'), { data: userData, credentials: { password: 'test' } })
    )
    return createUser


}

export default createUser