const graphql = require('graphql');
const Book = require('../models/book.js')
const Author = require('../models/author.js')

const {GraphQLObjectType, 
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema} = graphql;


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
                // const theAuthor = authors.find(author => author.id === parent.authorId)
                return Author.findById(parent.authorId)
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                // let bookArr=[];
                // books.forEach(book => {
                //     if(book.authorId === parent.id){
                //         bookArr.push(book)
                //     }
                // });
                //  return bookArr
                return Book.find({authorId: parent.id})
                }
            }
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString }},
            resolve(parent, args){
                //  code to get data from db / source
                // const myBook = books.find(book => book.id === args.id)
                // return myBook
                return Book.findById(args.id)
                }
            },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID }},
            resolve(parent, args){
                //  code to get data from db / source
                // const theAuthor = authors.find(author => author.id === args.id)
                // return theAuthor
                return Author.findById(args.id)

            }
        },
        bookList: {
            type: new GraphQLList(BookType),
            args: {id: {type: GraphQLID }},
            resolve(parent, args){
                //  code to get data from db / source
                // return books
                return Book.find({})
            }
        },
        authorList: {
            type: new GraphQLList(AuthorType),
            args: {id: {type: GraphQLID }},
            resolve(parent, args){
                //  code to get data from db / source
                // return authors
                return Author.find({})
            }
        },
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor:{
            type: AuthorType,
            args:{
                name:{type: new GraphQLNonNull(GraphQLString)},
                age:{type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args){
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save()
            }
        },
        addBook:{
            type: BookType,
            args:{
                name:{type: new GraphQLNonNull(GraphQLString)},
                genre:{type: new GraphQLNonNull(GraphQLString)},
                authorId:{type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save()
            }
        },
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})