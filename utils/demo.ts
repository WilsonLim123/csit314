
import { faker } from '@faker-js/faker';

export function createRandomUser():UserInterface {
    return {
        id: faker.string.uuid(),
        profileId: faker.string.uuid(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        passwordHash: faker.internet.password(),
        country: faker.location.country(),
        ceaNumber: faker.string.nanoid() as string | undefined,
        agency: faker.company.name() as string | undefined,
        license: faker.string.nanoid() as string | undefined,
        profile: {
            role: faker.helpers.arrayElement(['USER', 'AGENT', 'ADMIN']),
            activated: faker.helpers.arrayElement([true, false])
        } as { role: string, activated: boolean } | undefined,
        activated: faker.helpers.arrayElement([true, false])
    };
}

export function createRandomUserProfile() {
    return {
        id: faker.string.uuid(),
        role: faker.helpers.arrayElement(['USER', 'AGENT', 'ADMIN']),
        activated: faker.helpers.arrayElement([true, false]),
    };
}

export function createRandomProperty() {
    return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        address: faker.location.streetAddress(),
        description: faker.commerce.productDescription(),
        onSale: faker.helpers.arrayElement([true, false]),
        views: faker.number.int({ min: 100, max: 10000 }),
        bedroom: faker.number.int({ min: 1, max: 4 }),
        bathroom: faker.number.int({ min: 1, max: 3 }),
        leaseYear: faker.number.int({ min: 1900, max: 2024 }),
        squareFt: faker.number.int({ min: 30, max: 50 }),
        builtYear: faker.number.int({ min: 1900, max: 2024 }),
        price: faker.number.int({ min: 100000, max: 1000000 }),
        imageUrl: faker.image.url(),
        activated: faker.helpers.arrayElement([true, false]),
    };

}

export function createRatingsAndReviews() {
    return {
        id: faker.string.nanoid(),
        userId: faker.string.nanoid(),
        rating: faker.number.int({ min: 1, max: 5 }),
        review: faker.lorem.sentence()
    }

}


type UserInterface = {
    id?: string;
    profileId?: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    passwordHash?: string;
    country?: string;
    ceaNumber?: string | undefined;
    agency?: string | undefined;
    license?: string | undefined;
    profile?: {
        role:string, activated:boolean
    } | undefined;
    activated?: boolean;
}

type UserProfileInterface = ReturnType<typeof createRandomUserProfile>

type PropertyInterface = ReturnType<typeof createRandomProperty>

const user = [...new Array(10)].map(() => createRandomUser());

const userProfiles = [...new Array(5)].map(() => createRandomUserProfile());

// const userProfiles = [
//     createRandomUserProfile(),
//     createRandomUserProfile(),
//     createRandomUserProfile(),
//     createRandomUserProfile(),
//     createRandomUserProfile(),
// ]

const properties = [...new Array(20)].map(() => createRandomProperty());

// const properties = [
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
//     createRandomProperty(),
// ]

const ratingsAndReviews = []

const shortlist = []

const listing = []

const ownership = []

export const demo = {
    user, userProfiles, properties
}

export type {
    UserInterface,
    UserProfileInterface,
    PropertyInterface
}