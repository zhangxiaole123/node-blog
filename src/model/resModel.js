//model 基类
class BaseModel {
    constructor(data, message) {
        if (typeof data === 'string') {
            this.message = data
            data = null
            message = null
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}

//成功模型
class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.code = 0
        this.success = true
    }
}

//失败模型
class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.code = -1
        this.success = false
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}