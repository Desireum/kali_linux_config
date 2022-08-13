 "__  __        __     _____ __  __ ____   ____ 
"|  \/  |_   _  \ \   / /_ _|  \/  |  _ \ / ___|
"| |\/| | | | |  \ \ / / | || |\/| | |_) | |    
"| |  | | |_| |   \ V /  | || |  | |  _ <| |___ 
"|_|  |_|\__, |    \_/  |___|_|  |_|_| \_\\____|
        "|___/                                  

set nocompatible

filetype on
filetype indent on
filetype plugin on
filetype plugin indent on

set mouse=a
set encoding=utf-8

let &t_ut=''

set expandtab
set tabstop=2
set shiftwidth=2
set softtabstop=2

set list
set listchars=tab:▸\ ,trail:▫

set scrolloff=5
set tw=0
set indentexpr=
set backspace=indent,eol,start
set foldmethod=indent
set foldlevel=99
let &t_SI = "\<Esc>]50;CursorShape=1\x7"
let &t_SR = "\<Esc>]50;CursorShape=2\x7"
let &t_EI = "\<Esc>]50;CursorShape=0\x7"
set laststatus=2
set autochdir
au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif

syntax on

let mapleader=" "

set number
set norelativenumber
set cursorline
set wrap
set showcmd
set wildmenu
set hlsearch
set incsearch
set ignorecase
set smartcase

" :iabbrev"
exec "iabbrev @@ wtrkevin@vip.qq.com"
exec "iabbrev mian main"
exec "iabbrev adn and"
""exec "iabbrev include include <>"


""
exec "nohlsearch"

"Open vimrc file
""noremap <LEADER>rc :e ~/.vim/vimrc<CR>
noremap <LEADER>ev :vsplit $MYVIMRC<CR>


"Press space twice to jump to the next '<+>' and edit it
noremap <LEADER><LEADER> <Esc>/<++><CR>:nohlsearch<CR>c4l

" remap the up down right left key
noremap i k
noremap k j
noremap j h
noremap h i
noremap H I
noremap I 5k
noremap K 5j
noremap J 7h
noremap L 7l

inoremap { {}<Esc>i
inoremap ( ()<Esc>i
inoremap [ []<Esc>i
inoremap " ""<Esc>i
inoremap ' ''<Esc>i
inoremap ` ``<Esc>i
" nnoremap <leader>" viw<esc>a"<esc>bi"<esc>lel

" esc when type jk in inster mode"
inoremap jk <esc>
inoremap <esc> <nop>

" markdown shortcut"
inoremap ,n ---<Enter><Enter>
inoremap ,b **** <++><Esc>F*hi
inoremap ,s ~~~~ <++><Esc>F~hi
inoremap ,i ** <++><Esc>F*i
inoremap ,d `` <++><Esc>F`i
inoremap ,c ```<Enter><++><Enter>```<Enter><Enter><++><Esc>4kA
inoremap ,h ====<Space><++><Esc>F=hi
inoremap ,p ![](<++>) <++><Esc>F[a
inoremap ,a [](<++>) <++><Esc>F[a
inoremap ,1 #<Space><Enter><++><Esc>kA
inoremap ,2 ##<Space><Enter><++><Esc>kA
inoremap ,3 ###<Space><Enter><++><Esc>kA
inoremap ,4 ####<Space><Enter><++><Esc>kA
inoremap ,l --------<Enter>

"Spell Check with <space>sc
"Press z= to select the correct word
noremap <LEADER>sc :set spell!<CR>
noremap <C-x> a<C-x>s
inoremap <C-x> <Esc>a<C-x>s

"<C-o> <C-i> move cursor to previous position or next position
" :w !sudo tee % " use this command to save file while open without super user privilege

"Press <space><enter> to UN highlight search
noremap <LEADER><CR> :nohlsearch<CR>

" copy and paste from and to outside
noremap <C-c> "+y
noremap <C-p> "+p


" Save Quit and reload vimrc
noremap S :w<CR>
noremap Q :q<CR>
noremap R :source $MYVIMRC<CR>

" shortcut to split window
noremap sa :set nosplitright<CR>:vsplit<CR>
noremap sd :set splitright<CR>:vsplit<CR>
noremap sw :set nosplitbelow<CR>:split<CR>
noremap ss :set splitbelow<CR>:split<CR>

noremap sv <C-w>t<C-w>H
noremap sh <C-w>t<C-w>K

" move cursor to the other split window
noremap <LEADER>l <C-w>l
noremap <LEADER>i <C-w>k
noremap <LEADER>k <C-w>j
noremap <LEADER>j <C-w>h

" adjust the size of the current window
noremap <up> :res +5<CR>
noremap <down> :res -5<CR>
noremap <left> :vertical resize-5<CR>
noremap <right> :vertical resize+5<CR>

" create new tab and change each other
noremap ti :tabe<CR>
noremap tj :-tabnext<CR>
noremap tl :+tabnext<CR>


"==================== install the plug ==================
"========================================================
call plug#begin('~/.vim/plugged')
Plug 'vim-airline/vim-airline'
Plug 'connorholyday/vim-snazzy'
" File navigation
Plug 'preservim/nerdtree'
Plug 'Xuyuanp/nerdtree-git-plugin'

" Auto complete
""Plug 'ycm-core/YouCompleteMe'

Plug 'dense-analysis/ale'

Plug 'preservim/tagbar'

Plug 'mbbill/undotree'

Plug 'iamcco/markdown-preview.nvim'

" Python
Plug 'vim-scripts/indentpython.vim'

"== Markdown ==
"==============
Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install_sync() }, 'for' :['markdown', 'vim-plug'] }
Plug 'dhruvasagar/vim-table-mode', { 'on': 'TableModeToggle' }
""Plug 'vimwiki/vimwiki'

" Bookmarks
Plug 'kshenoy/vim-signature'

Plug 'terryma/vim-multiple-cursors'
Plug 'junegunn/goyo.vim' " distraction free writing mode
Plug 'tpope/vim-surround' " type ysks' to wrap the word with '' or type cs'` to change 'word' to `word`
Plug 'godlygeek/tabular' " type ;Tabularize /= to align the =
Plug 'gcmt/wildfire.vim' " in Visual mode, type i' to select all text in '', or type i) i] i} ip
Plug 'scrooloose/nerdcommenter' " in <space>cc to comment a line

" Dependencies
Plug 'MarcWeber/vim-addon-mw-utils'
Plug 'kana/vim-textobj-user'
Plug 'fadein/vim-FIGlet'

"== Auto Comment and Uncomment =="
"================================
Plug 'KarimElghamry/vim-auto-comment'

Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() }, 'for': ['markdown', 'vim-plug']}

Plug 'dhruvasagar/vim-table-mode'
Plug 'roxma/nvim-yarp', { 'do': 'pip install -r requirements.txt' }

"== NCM2 =="
"==========
Plug 'ncm2/ncm2'
Plug 'roxma/nvim-yarp'
Plug 'ncm2/ncm2-bufword'
Plug 'ncm2/ncm2-path'

"Python"
Plug 'ncm2/ncm2-jedi' 

"C/C++"
Plug 'ncm2/ncm2-pyclang'

"javascript"
Plug 'ncm2/ncm2-tern'

"css"
Plug 'ncm2/ncm2-cssomni'

"==Tag Bar F8=="
"==============
Plug 'preservim/tagbar'

"==Plug 'Ron89/thesaurus_query.vim==
"===================================
Plug 'mhinz/vim-startify'

"==FZF==
"======="
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
call plug#end()


"========== tagbar ==========="
"=============================
nnoremap <F8> :TagbarToggle<CR>


" Syntax check

"====== Vim Snazzy ======"
"========================
let g:SnazzyTransparent = 0
colorscheme snazzy


"=======Goyo configuration==========
"===================================
noremap <LEADER>gy :Goyo<CR>
let g:goyo_width = 150


"===========Signature-vim===========
"===================================
let g:SignatureMap = {
    \ 'Leader'             :  "m",
    \ 'PlaceNextMark'      :  "m,",
    \ 'ToggleMarkAtLine'   :  "m.",
    \ 'PurgeMarksAtLine'   :  "m-",
    \ 'DeleteMark'         :  "dm",
    \ 'PurgeMarks'         :  "dm/",
    \ 'PurgeMarkers'       :  "dm?",
    \ 'GotoNextLineAlpha'  :  "m<LEADER>",
    \ 'GotoPrevLineAlpha'  :  "'[",
    \ 'GotoNextSpotAlpha'  :  "`]",
    \ 'GotoPrevSpotAlpha'  :  "`[",
    \ 'GotoNextLineByPos'  :  "]'",
    \ 'GotoPrevLineByPos'  :  "['",
    \ 'GotoNextSpotByPos'  :  "]`",
    \ 'GotoPrevSpotByPos'  :  "[`",
    \ 'GotoNextMarker'     :  "]-",
    \ 'GotoPrevMarker'     :  "[-",
    \ 'GotoNextMarkerAny'  :  "]=",
    \ 'GotoPrevMarkerAny'  :  "[=",
    \ 'ListBufferMarks'    :  "m/",
    \ 'ListBufferMarkers'  :  "m?"
    \ }


"========= undotree ==========
"=============================
noremap L :UndotreeToggle<CR>
if has("persistent_undo")
   let target_path = expand('~/.undodir')

    " create the directory and any parent directories
    " if the location does not exist.
    if !isdirectory(target_path)
        call mkdir(target_path, "p", 0700)
    endif

    let &undodir=target_path
    set undofile
endif


" =================================="
" ==================================
"
"let &t_8f = "\<Esc>[38;2;%lu;%lu;%lum"
"let &t_8b = "\<Esc>[48:2;%lu;%lu;%lum"


if &term == "alacritty"
let &term = "xterm-256color"
endif


"============Auto Comment==========="
"===================================
"Setting of the autocomment"
let g:inline_comment_dict = {
  \'//': ["js", "ts", "cpp", "c", "dart"],
  \'#': ['py', 'sh'],
  \'"': ['vim'],
  \}
let g:block_comment_dict = {
  \'/*': ["js", "ts", "cpp", "c", "dart"],
  \'"""': ['py'],
  \}
let g:default_inline_comment = '#'
let g:default_block_comment = '/*'
let g:autocomment_map_keys = 1
" Inline comment mapping
vnoremap <silent><C-l> :AutoInlineComment<CR>
nnoremap <silent><C-l> :AutoInlineComment<CR>

" Block comment mapping
vnoremap <C-s> :AutoBlockComment<CR>
nnoremap <C-s> :AutoBlockComment<CR>

noremap <LEADER>g :w !sudo tee %<CR>


"============= Markdown preview ==================="
"=================================================="
" set to 1, nvim will open the preview window after entering the markdown buffer
" default: 0
let g:mkdp_auto_start = 0

" set to 1, the nvim will auto close current preview window when change
" from markdown buffer to another buffer
" default: 1
let g:mkdp_auto_close = 1

" set to 1, the vim will refresh markdown when save the buffer or
" leave from insert mode, default 0 is auto refresh markdown as you edit or
" move the cursor
" default: 0
let g:mkdp_refresh_slow = 0

" set to 1, the MarkdownPreview command can be use for all files,
" by default it can be use in markdown file
" default: 0
let g:mkdp_command_for_global = 0

" set to 1, preview server available to others in your network
" by default, the server listens on localhost (127.0.0.1)
" default: 0
let g:mkdp_open_to_the_world = 0

" use custom IP to open preview page
" useful when you work in remote vim and preview on local browser
" more detail see: https://github.com/iamcco/markdown-preview.nvim/pull/9
" default empty
let g:mkdp_open_ip = ''

" specify browser to open preview page
" for path with space
" valid: `/path/with\ space/xxx`
" invalid: `/path/with\\ space/xxx`
" default: ''
let g:mkdp_browser = '/usr/bin/google-chrome-stable'

" set to 1, echo preview page url in command line when open preview page
" default is 0
let g:mkdp_echo_preview_url = 0

" a custom vim function name to open preview page
" this function will receive url as param
" default is empty
let g:mkdp_browserfunc = ''

" options for markdown render
" mkit: markdown-it options for render
" katex: katex options for math
" uml: markdown-it-plantuml options
" maid: mermaid options
" disable_sync_scroll: if disable sync scroll, default 0
" sync_scroll_type: 'middle', 'top' or 'relative', default value is 'middle'
"   middle: mean the cursor position alway show at the middle of the preview page
"   top: mean the vim top viewport alway show at the top of the preview page
"   relative: mean the cursor position alway show at the relative positon of the preview page
" hide_yaml_meta: if hide yaml metadata, default is 1
" sequence_diagrams: js-sequence-diagrams options
" content_editable: if enable content editable for preview page, default: v:false
" disable_filename: if disable filename header for preview page, default: 0
let g:mkdp_preview_options = {
    \ 'mkit': {},
    \ 'katex': {},
    \ 'uml': {},
    \ 'maid': {},
    \ 'disable_sync_scroll': 0,
    \ 'sync_scroll_type': 'middle',
    \ 'hide_yaml_meta': 1,
    \ 'sequence_diagrams': {},
    \ 'flowchart_diagrams': {},
    \ 'content_editable': v:false,
    \ 'disable_filename': 0,
    \ 'toc': {}
    \ }

" use a custom markdown style must be absolute path
" like '/Users/username/markdown.css' or expand('~/markdown.css')
let g:mkdp_markdown_css = ''

" use a custom highlight style must absolute path
" like '/Users/username/highlight.css' or expand('~/highlight.css')
let g:mkdp_highlight_css = ''

" use a custom port to start server or empty for random
let g:mkdp_port = ''

" preview page title
" ${name} will be replace with the file name
let g:mkdp_page_title = '「${name}」'

" recognized filetypes
" these filetypes will have MarkdownPreview... commands
let g:mkdp_filetypes = ['markdown']

" set default theme (dark or light)
" By default the theme is define according to the preferences of the system
let g:mkdp_theme = 'light'

nnoremap <LEADER>p :MarkdownPreviewToggle<CR>


"======= MARKDOWN Table mode Toggle ==========="
"==============================================
nnoremap <LEADER>tm :TableModeToggle<CR>


"=============NCM2============="
"==============================
let g:python3_host_prog='/usr/bin/python3'

autocmd BufEnter * call ncm2#enable_for_buffer()
set completeopt=noinsert,menuone,noselect

let g:ncm2_pyclang#library_path = '/usr/lib/llvm-14/lib'


"=============Word search=============="
"======================================
nnoremap <Leader>tw :ThesaurusQueryReplaceCurrentWord<CR>


" ============NERDTree================"
" ====================================
" Exit Vim if NERDTree is the only window remaining in the only tab.
autocmd BufEnter * if tabpagenr('$') == 1 && winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | quit | endif

noremap ff :NERDTreeToggle<CR>

let NERDTreeMapOpenSplit = 'h'
let NERDTreeMapToggleHidden = 'zh'
let NERDTreeMapJumpFirstChild = 'I'
let ERDTreeMapJumpFirstChild = 'K'


"===================NerdTreeGit======================"
"====================================================
let g:NERDTreeGitStatusIndicatorMapCustom = {
                \ 'Modified'  :'✹',
                \ 'Staged'    :'✚',
                \ 'Untracked' :'✭',
                \ 'Renamed'   :'➜',
                \ 'Unmerged'  :'═',
                \ 'Deleted'   :'✖',
                \ 'Dirty'     :'✗',
                \ 'Ignored'   :'☒',
                \ 'Clean'     :'✔︎',
                \ 'Unknown'   :'?',
                \ }
