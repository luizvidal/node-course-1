const fs = require("fs");
const { join } = require("path");
const path = require("path");

/* Callback padrao */
const callback = (error, operation) => {
  if (error) return console.log(error);
  console.log(operation);
};

/* Cria uma pasta e adicona um conteudo dentro dela */
const createFolderAndfile = (dirname, filename, content) => {
  const relativePath = `${__dirname}/${dirname}`;
  fs.mkdir(path.join(relativePath), (error) =>
    callback(error, `${dirname} successfully created!`)
  );
  fs.writeFile(path.join(relativePath, filename), content, (error) =>
    callback(error, `${filename} successfully created!`)
  );
};

// Criar uma pasta chamada test
/* fs.mkdir(path.join(__dirname, "/test"), error => callback(error)); */

// Cria um arquivo de texto chamado test
/* fs.writeFile(path.join(__dirname, "/test/"), "test.txt", (error) =>
  callback(error, "Arquivo criado com sucesso!")
); */

// fs.appendFile(
//   path.join(__dirname, "/src/app.component.html"),
//   `
// <div>
//   <h1>Test</h1>
//   <p>Test test test test test</p>
// </di>
//   `,
//   (error) => callback(error, "adf")
// );

// fs.writeFile(
//   path.join(__dirname, "/src", "index2.html"),
//   "index2.html",
//   (error) => callback(error, 1)
// );

// ler arquivo
// fs.readFile(path.join(__dirname, "/src/index2.html"), "utf8", (err, data) =>
//   callback(err, data)
// );

/* const makeFolderCreateFileEditFileReadFile = (dirname, filename, content) => {
  // const cathError = (error) => {if (error) return console.error(error)}
  fs.mkdir(path.join(__dirname, dirname), (error) => {
    if (error) return console.log("mkdir", error);
    fs.writeFile(
      path.join(__dirname, `/${dirname}/${filename}`),
      content,
      (error) => {
        if (error) return console.log("writeFile", error);
        fs.appendFile(path.join(__dirname, `/${dirname}/${filename}`), content),
          (error) => {
            if (error) return console.log("appendFile", error);
            fs.readFile(
              path.join(__dirname, `/${dirname}/${filename}`),
              "utf8",
              error,
              (data) => {
                if (error) return console.log("readFile", error);
                console.log(data);
              }
            );
          };
      }
    );
  });
};

makeFolderCreateFileEditFileReadFile(
  "testetste",
  "asdf.txt",
  "asdfasdf awdsfljlasdf joj sadljf lasj jfldf"
);
 */

fs.mkdir(path.join(__dirname, "nova-pasta"), () => {
  fs.writeFile(
    path.join(__dirname, "nova-pasta", "arquivo-da-nova-pasta.txt"),
    "texto do arquivo da nova pasta",
    () => {
      fs.appendFile(
        join(__dirname, "nova-pasta", "arquivo-da-nova-pasta.txt"),
        " -->novo conteudo adicionado ao texto do arquivo<-- ",
        () => {
          fs.readFile(
            join(__dirname, "nova-pasta", "arquivo-da-nova-pasta.txt"),
            "utf8",
            (err, data) => {
              console.log(data);
            }
          );
        }
      );
    }
  );
});

const testFunc = (dirname, filename, content) => {
  const relativePath = `${__dirname}/${dirname}`;
  const relativePathFile = `${relativePath}/${filename}`;
  fs.mkdir(relativePath, () => {
    fs.writeFile(relativePathFile, content, () => {
      fs.appendFile(relativePathFile, `. EDITED: ${content}`, () => {
        fs.readFile(relativePathFile, (err, data) => {
          console.log(data);
        });
      });
    });
  });
};

testFunc("nova-pasta-2", "test.txt", "test test ");
