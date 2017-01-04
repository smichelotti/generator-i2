# generator-i2

Yeoman generators for Ionic 2 projects.

The easily way to install and run locally is:

Make sure you have Yeoman installed:

```
npm install -g yo
```

Then install the generator locally:

```
git clone https://github.com/smichelotti/generator-i2.git
cd generator-i2
npm link
```

Then to invoke the generator, cd into the `pages` directory of your Ionic 2 app (i.e., <project-root>/src/pages). 
Then you can run the following command to invoke the sub-generator:

```
yo i2:ionicpage MyPage
```