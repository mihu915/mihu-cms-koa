class ModelHooks{
  userBeforeCreate(instance, option){
    console.log('userBeforeCreate')
  }
}

module.exports = new ModelHooks()