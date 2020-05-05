// plugin 是一个类
class CopyrightWebpackPlugin {
    constructor() {
    }

    apply(compiler) {
        // compiler 存放的是打包后的所有东西

        // 同步写法
        compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
            console.log('compiler');
        });

        // 异步写法
        // emit 将打包后东西放在dist目录前
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            // compilation 存放的是这次打包相关的内容
            console.log('compilation', compilation.assets);
            compilation.assets['copyright.tet'] = {
                source: function () {
                    return 'copyright by dell lee'
                },
                size: function () {
                    return 21;
                }
            };
            console.log('CopyrightWebpackPlugin 111');
            cb();
        });
    }
}

module.exports = CopyrightWebpackPlugin;