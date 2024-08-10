const {Borrows, Users, Books} = require("../models")
const { Op } = require('sequelize');

class Controller {
	static getBorrow(req, res, next) {
        Borrows.findAll({where: {
            status: 'borrow'
        }}).then((result) => {
            if (result.length === 0) {
				next({name: "ResourceNotFound", message: 'No one borrowing'})
			}
			res.status(200).json(result);
        })
	}
	static getBorrowDetail(req, res, next) {
		const bookId = req.params.id;
		Borrows.findOne({
			where: { id: bookId }
		}).then((result) => {
			if (!result) {
				next({name: "ResourceNotFound", message: 'Books not found'})
			}
			res.status(200).json(result);
		}).catch((error) => next(error))
	}

    static async addBorrow(req, res, next) {
        const {
            BookId,
            UserId
        } = req.body
        const startBorrow = new Date();
        const endBorrow = new Date();
        endBorrow.setDate(startBorrow.getDate() + 7)
        const BorrowData = {
            BookId,
            UserId,
            startBorrow,
            endBorrow,
            status: 'borrow'
        }
        const users = await Users.findOne({
            where:{
                id: UserId
            }
        })
        if(!users.status){
            await Users.update({ status: 'borrowed' }, { where: { id: UserId } });
            const borrows = await Borrows.create(BorrowData).then((result) => {
                res.status(201).json(result)
                return result
            })
        }
        next({name: "BadRequest", message: 'Already Borrowed a Book'})
    } 
    static async returnBorrow(req, res, next) {
        const {
            id
        } = req.params
		const borrowsData = await Borrows.findOne({
			where: { BorrowsId: id }
		})
        if (borrowsData) {
            Borrows.update({
                status: 'returned'
            }, {
                where: {
                    BorrowsId: id
                }
            })
            Users.update({
                status: null
            }, {
                where: {
                    id: borrowsData.UserId
                }
            })
            res.status(200).json({message: 'Books Returned'});
        }
        else {
				next({name: "ResourceNotFound", message: 'Books not found'})
        }
    }
    static getLateList(req, res, next) {
        const currentDate = new Date();
        Borrows.findAll({
            where: {
                status: 'borrow',
                endBorrow: { [Op.lt]: currentDate }
            },
            include: [
                {
                  model: Users,
                  attributes: ['email']
                },
                {
                  model: Books,
                  attributes: ['title']
                }
              ]
        }).then((result) => {
            if (result.length === 0) {
				next({name: "ResourceNotFound", message: 'No one Lte'})
			} else {
                res.status(200).json(result);

            }
        })
    }
}

module.exports = Controller;