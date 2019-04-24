import { JsonController, Get, Param} from 'routing-controllers'
import User from './entity'

@JsonController()
export default class UserController {
    @Get('/users/:id')
    getUser(
    @Param('id') id: number
    ) {
    return User.findOne(id)
    }
        @Get('/users')
    async allUsers() {
    const users = await User.find()
    return { users }
    }
}