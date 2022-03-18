import { Prisma, PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const items: Prisma.ItemCreateInput[] = [
    {
        image: 'tablet.jpg',
        title: 'Ipad',
        price: 499.99
    },
    {
        image: 'iphone.jpg',
        title: 'Iphone',
        price: 599.99
    },
    {
        image: 'mac.jpg',
        title: 'Mac',
        price: 699.99
    },
    {
        image: 'ipod.jpg',
        title: 'Ipod',
        price: 199.99
    },
    {
        image: 'earbuds.jpg',
        title: 'Earbuds',
        price: 99.99
    },
    {
        image: 'icar.jpg',
        title: 'Car',
        price: 69999.99
    },
    {
        image: 'iwash.jpg',
        title: 'WashingMachine',
        price: 399.99
    },
    {
        image: 'ifridge.jpg',
        title: 'Fridge',
        price: 499.99
    },
    {
        image: 'itable.jpg',
        title: 'Table',
        price: 99.99
    },
    {
        image: 'ibox.jpg',
        title: 'Box',
        price: 99.99
    }

]


const users: Prisma.UserCreateInput[] = [
    {
        email: 'nicolo@email.com',
        password: bcrypt.hashSync('nicolo'),
        orders: {
            create: [
                { item: { connect: { title: 'Fridge' } }, quantity: 1 },
                { item: { connect: { title: 'Car' } }, quantity: 1 }
            ]
        }
    },
    {
        email: 'lautaro@email.com',
        password: bcrypt.hashSync('martinez'),
        orders: {
            create: [
                {
                    item: {
                        connectOrCreate: {
                            where: { title: 'Iball' },
                            create: { image: 'iball.jpg', title: 'Iball', price: 29.99 }
                        }
                    },
                    quantity: 3
                }
            ]
        }
    },
    {
        email: 'milan@email.com',
        password: bcrypt.hashSync('Skrinar')
    },
    {
        email: 'sebastian@email.com',
        password: bcrypt.hashSync('DeVrijl')
    },
    {
        email: 'andrea@email.com',
        password: bcrypt.hashSync('Bastoni')
    },
    {
        email: 'alexis@email.com',
        password: bcrypt.hashSync('Sanches')
    },
    {
        email: 'marcelo@email.com',
        password: bcrypt.hashSync('Brozovic')
    },
    {
        email: 'samir@email.com',
        password: bcrypt.hashSync('Handanovic')
    },
    {
        email: 'robin@email.com',
        password: bcrypt.hashSync('Gosens')
    }
]

async function createStuff() {
    for (const item of items) {
        await prisma.item.create({ data: item })
    }

    for (const user of users) {
        await prisma.user.create({ data: user })
    }
}

createStuff()