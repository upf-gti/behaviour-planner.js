This is a server-side nodejs example. You can interact with the agent though the command line and see his/her responses.

Install the library and its depenencies. You can do it using npm:

```
npm install gl-matrix
npm install litegraph.js
npm install compromise
npm install compromise-numbers
npm install compromise-dates
npm install hbtree
npm install hbtree-extension
```

# Run command
``` node main.js -f "RAO wt http.json```

>The ```-f``` argument indicates the behaviour environment file that the planner has to execute. This file is created using the [Behaviour Planner app](https://webglstudio.org/projects/present/bplanner/latest/web-app/.