# vscode-git-push-progress

[![vscode version][vs-image]][vs-url]
![][install-url]
![][rate-url]
![][license-url]

Extra git menu command and key binding to push commits and output the progress to the output console. 

When you do git push by using the Push command from the Git Menu, you don't get any feedback until the push finishes or fails. If you push large files and/or many files at once, you'll then be stuck wondering when the push will finish and that's a problem. This Extension fixes that.

![](https://raw.githubusercontent.com/Luis-Domenech/vscode-git-push-progress/main/images/git-push-progress.gif)

## Regular Install

Install from the VS Code Marketplace by searching for vscode-git-push-progress

## Complicated Install

Launch VS Code Quick Open (`cmd`/`ctrl` + `p`), paste the following command, and press enter:

```
ext install vscode-git-push-progress
```

## Usage

I assume you have [git](https://git-scm.com/) installed.

After committing some changes to your local branch, instead of pressing Push, press Push Progress and you'll get bit by bit progress of the git push. Very useful when uploading many large files and you have no clue at all on the progress.

<!-- `vscode-git-progress-push` will make pushing changes to remote less stressful by outputing progress -->


## Change Log

### 2020-10-09

2. Added Key Binding to Ctrl + Alt + Enter. It only activates while the Git Sidebar menu is activate just like Ctrl + Enter, which auto commits to local branch all staged changes. Ideal workflow would be to commit staged changes with Ctrl + Enter and then auto Push Progress with Ctrl + Alt + Enter.

### 2020-10-07

1. Initial Release. Base code came from https://github.com/leftstick/vscode-git-tags

## LICENSE ##

[GPL v3 License](https://raw.githubusercontent.com/Luis-Domenech/vscode-git-push-progress/main/LICENSE)


[vs-url]: https://marketplace.visualstudio.com/items?itemName=luis-domenech.vscode-git-push-progress
[vs-image]: https://vsmarketplacebadge.apphb.com/version-short/luis-domenech.vscode-git-push-progress.svg
[install-url]: https://vsmarketplacebadge.apphb.com/installs-short/luis-domenech.vscode-git-push-progress.svg
[rate-url]: https://vsmarketplacebadge.apphb.com/rating/luis-domenech.vscode-git-push-progress.svg
[license-url]: https://img.shields.io/github/license/Luis-Domenech/vscode-git-push-progress.svg