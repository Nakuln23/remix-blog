var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");
var import_mongoose3 = __toESM(require("mongoose"));

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/nakulnagargade/Programming/Remix-talk-demo/app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-AFIROZCC.css";

// app/utils/session.server.ts
init_react();
var import_bcrypt = __toESM(require("bcrypt"));

// app/models/User.js
init_react();
var import_mongoose = __toESM(require("mongoose"));
var UserSchema = new import_mongoose.default.Schema({
  username: {
    type: String
  },
  passwordHash: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  posts: [{ type: import_mongoose.default.Schema.Types.ObjectId, ref: "Post" }]
});
var User = import_mongoose.default.model("User", UserSchema);
var User_default = User;

// app/utils/session.server.ts
var import_remix2 = __toESM(require_remix());
async function login({ username, password }) {
  const user = await User_default.findOne({
    username
  });
  if (!user)
    return null;
  const isCorrectPassword = await import_bcrypt.default.compare(password, user.passwordHash);
  if (!isCorrectPassword)
    return null;
  return user;
}
async function register({ username, password }) {
  const passwordHash = await import_bcrypt.default.hash(password, 10);
  return User_default.create({
    data: {
      username,
      passwordHash
    }
  });
}
var sessionSecret = "secret";
if (!sessionSecret) {
  throw new Error("No session secret");
}
var storage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "remixblog_session",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 60,
    httpOnly: true
  }
});
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUser(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    return null;
  }
  try {
    const user = await User_default.findOne({ where: { id: userId } });
    return user;
  } catch (error) {
    return null;
  }
}
async function logout(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return (0, import_remix2.redirect)("/auth/logout", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// route:/Users/nakulnagargade/Programming/Remix-talk-demo/app/root.jsx
var links = () => [{ rel: "stylesheet", href: global_default }];
var meta = () => {
  const description = "A cool blog built with Remix";
  const keywords = "remix, react, javascript";
  return {
    description,
    keywords
  };
};
var loader = async ({ request }) => {
  const user = await getUser(request);
  const data = {
    user
  };
  console.log(data, "data");
  return data;
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null), /* @__PURE__ */ React.createElement("title", null, title ? title : "Remix Blog")), /* @__PURE__ */ React.createElement("body", null, children, true ? /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null) : null));
}
function Layout({ children }) {
  const { user } = (0, import_remix3.useLoaderData)();
  console.log(user, "user");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    className: "logo"
  }, "Remix"), /* @__PURE__ */ React.createElement("ul", {
    className: "nav"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/posts"
  }, "Posts")), user ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("form", {
    action: "/auth/logout",
    method: "POST"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn"
  }, "Logout", user.username))) : /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/auth/login"
  }, "Login")))), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, children));
}
function ErrorBoundary({ error }) {
  console.log(error);
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, "Error"), /* @__PURE__ */ React.createElement("p", null, error.message)));
}

// route:/Users/nakulnagargade/Programming/Remix-talk-demo/app/routes/auth/logout.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader2
});
init_react();
var import_remix4 = __toESM(require_remix());
var action = async ({ request }) => {
  return logout(request);
};
var loader2 = async () => {
  return (0, import_remix4.redirect)("/");
};

// route:/Users/nakulnagargade/Programming/Remix-talk-demo/app/routes/auth/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => login_default
});
init_react();
var import_remix5 = __toESM(require_remix());
function validateUsername(username) {
  if (typeof username !== "string" || username.length < 3) {
    return "Username must be at least 3 characters";
  }
}
function validatePassword(password) {
  if (typeof password !== "string" || password.length < 6) {
    return "Password must be at least 6 characters";
  }
}
function badRequest(data) {
  return (0, import_remix5.json)(data, { status: 400 });
}
var action2 = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const username = form.get("username");
  const password = form.get("password");
  const fields = { loginType, username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }
  switch (loginType) {
    case "login": {
      const user = await login({ username, password });
      if (!user) {
        return badRequest({
          fields,
          fieldErrors: { username: "Invalid credentials" }
        });
      }
    }
    case "register": {
      const userExists = await User_default.findOne({
        username
      }).exec();
      if (userExists) {
        return badRequest({
          fields,
          fieldErrors: { username: `User ${username} already exists` }
        });
      }
      const user = await register({ username, password });
      if (!user) {
        return badRequest({
          fields,
          formError: "Something went wrong"
        });
      }
      return createUserSession(user.id, "/posts");
    }
    default: {
      return badRequest({
        fields,
        formError: "Login type is invalid"
      });
    }
  }
  return (0, import_remix5.redirect)("/posts");
};
function Login() {
  var _a, _b, _c, _d, _e, _f, _g;
  const actionData = (0, import_remix5.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "auth-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login")), /* @__PURE__ */ React.createElement("div", {
    className: "page-content"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Login or Register"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: !((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.loginType) || ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "login"
  }), " ", "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register",
    defaultChecked: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "register"
  }), " ", "Register")), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "username",
    id: "username",
    defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.username
  }), /* @__PURE__ */ React.createElement("div", {
    className: "error"
  }, ((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.username) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "username-error"
  }, actionData.fieldErrors.username) : null)), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    name: "password",
    id: "password",
    defaultValue: (_f = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _f.password
  }), /* @__PURE__ */ React.createElement("div", {
    className: "error"
  }, ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.password) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "password-error"
  }, actionData.fieldErrors.password) : null)), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-block",
    type: "submit"
  }, "Submit"))));
}
var login_default = Login;

// route:/Users/nakulnagargade/Programming/Remix-talk-demo/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
init_react();
function Home() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix!"), /* @__PURE__ */ React.createElement("p", null, "Remix is a full stack web framework by the creators of React Router. This is a simple blog app from the Traversy Media Remix crash course."));
}
var routes_default = Home;

// route:/Users/nakulnagargade/Programming/Remix-talk-demo/app/routes/posts.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default
});
init_react();
var import_remix6 = __toESM(require_remix());
var import_react_bootstrap = require("react-bootstrap");
function Posts() {
  return /* @__PURE__ */ React.createElement(import_react_bootstrap.Container, null, /* @__PURE__ */ React.createElement(import_react_bootstrap.Row, null, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null)));
}
var posts_default = Posts;
{
}

// route:/Users/nakulnagargade/Programming/Remix-talk-demo/app/routes/posts/$postId.jsx
var postId_exports = {};
__export(postId_exports, {
  action: () => action3,
  default: () => postId_default,
  loader: () => loader3
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/models/Post.js
init_react();
var import_mongoose2 = __toESM(require("mongoose"));
var PostSchema = new import_mongoose2.default.Schema({
  userid: {
    type: String
  },
  title: String,
  body: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: import_mongoose2.default.Schema.Types.ObjectId,
    ref: "User"
  }
});
var Post = import_mongoose2.default.model("Post", PostSchema);
var Post_default = Post;

// route:/Users/nakulnagargade/Programming/Remix-talk-demo/app/routes/posts/$postId.jsx
var loader3 = async ({ request, params }) => {
  const user = await getUser(request);
  const post = await Post_default.findOne({
    id: params.postId
  });
  if (!post)
    throw new Error("Post not found");
  const data = { post, user };
  return data;
};
var action3 = async ({ request, params }) => {
  const form = await request.formData();
  if (form.get("_method") === "delete") {
    const user = await getUser(request);
    const post = await Post_default.findOneAndDelete({
      id: params.postId
    });
    if (!post)
      throw new Error("Post not found");
    return (0, import_remix7.redirect)("/posts");
  }
};
function Post2() {
  const { post, user } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, post.title), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/posts",
    className: "btn btn-reverse"
  }, "Back")), /* @__PURE__ */ React.createElement("div", {
    className: "page-content"
  }, post.body), /* @__PURE__ */ React.createElement("div", {
    className: "page-footer"
  }, user.id === post.userId && /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-delete"
  }, "Delete"))));
}
var postId_default = Post2;

// route:/Users/nakulnagargade/Programming/Remix-talk-demo/app/routes/posts/index.jsx
var posts_exports2 = {};
__export(posts_exports2, {
  default: () => posts_default2,
  loader: () => loader4
});
init_react();
var import_remix8 = __toESM(require_remix());
var loader4 = async ({ request }) => {
  const user = await getUser(request);
  const data = {
    posts: await Post_default.find({
      userId: user.id
    })
  };
  return data;
};
function PostItems() {
  const { posts } = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/posts/new",
    className: "btn"
  }, "New Post")), /* @__PURE__ */ React.createElement("ul", {
    className: "posts-list"
  }, posts == null ? void 0 : posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post._id
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: post._id
  }, /* @__PURE__ */ React.createElement("h3", null, post.title), new Date(post.createdAt).toLocaleString())))));
}
var posts_default2 = PostItems;

// route:/Users/nakulnagargade/Programming/Remix-talk-demo/app/routes/posts/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action4,
  default: () => new_default
});
init_react();
var import_remix9 = __toESM(require_remix());
function validateTitle(title) {
  if (typeof title !== "string" || title.length < 3) {
    return "Title must be at least 3 characters";
  }
}
function validateBody(body) {
  if (typeof body !== "string" || body.length < 10) {
    return "Body must be at least 10 characters";
  }
}
function badRequest2(data) {
  return (0, import_remix9.json)(data, { status: 400 });
}
var action4 = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");
  const user = await getUser(request);
  console.log(user, "user.id", user.id);
  const fields = { title, body };
  const fieldErrors = {
    title: validateTitle(title),
    body: validateBody(body)
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    console.log(fieldErrors);
    return badRequest2({ fieldErrors, fields });
  }
  const post = await Post_default.create(__spreadProps(__spreadValues({}, fields), { userId: user.id }));
  return (0, import_remix9.redirect)(`/posts/${post.id}`);
};
function NewPost() {
  var _a, _b, _c, _d;
  const actionData = (0, import_remix9.useActionData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "New Post"), /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "/posts",
    className: "btn btn-reverse"
  }, "Back")), /* @__PURE__ */ React.createElement("div", {
    className: "page-content"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.title
  }), /* @__PURE__ */ React.createElement("div", {
    className: "error"
  }, ((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.title) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "title-error"
  }, actionData.fieldErrors.title) : null)), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "body"
  }, "Post Body"), /* @__PURE__ */ React.createElement("textarea", {
    name: "body",
    id: "body",
    defaultValue: (_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.body
  }), /* @__PURE__ */ React.createElement("div", {
    className: "error"
  }, ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.body) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "body-error"
  }, actionData.fieldErrors.body) : null)), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-block"
  }, "Add Post"))));
}
var new_default = NewPost;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "85972349", "entry": { "module": "/build/entry.client-VO5YGCBY.js", "imports": ["/build/_shared/chunk-7ZNUZOQN.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-SSEOOFLL.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-DTP5N4PE.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/logout": { "id": "routes/auth/logout", "parentId": "root", "path": "auth/logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/logout-PLSBI722.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-4PPMHXWO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts": { "id": "routes/posts", "parentId": "root", "path": "posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts-EXVZMWT7.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$postId": { "id": "routes/posts/$postId", "parentId": "routes/posts", "path": ":postId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$postId-EXHGXZCQ.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "routes/posts", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-DOFTB7BG.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/new": { "id": "routes/posts/new", "parentId": "routes/posts", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/new-52HXETFH.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-85972349.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/logout": {
    id: "routes/auth/logout",
    parentId: "root",
    path: "auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/posts/$postId": {
    id: "routes/posts/$postId",
    parentId: "routes/posts",
    path: ":postId",
    index: void 0,
    caseSensitive: void 0,
    module: postId_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "routes/posts",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: posts_exports2
  },
  "routes/posts/new": {
    id: "routes/posts/new",
    parentId: "routes/posts",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 4e3;
import_mongoose3.default.connect("mongodb+srv://new-user:newUser@cluster0.dhvun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("MongoDB is connected");
}).catch((err) => {
  console.log(err);
});
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGU6L1VzZXJzL25ha3VsbmFnYXJnYWRlL1Byb2dyYW1taW5nL1JlbWl4LXRhbGstZGVtby9hcHAvcm9vdC5qc3giLCAiLi4vYXBwL3V0aWxzL3Nlc3Npb24uc2VydmVyLnRzIiwgIi4uL2FwcC9tb2RlbHMvVXNlci5qcyIsICJyb3V0ZTovVXNlcnMvbmFrdWxuYWdhcmdhZGUvUHJvZ3JhbW1pbmcvUmVtaXgtdGFsay1kZW1vL2FwcC9yb3V0ZXMvYXV0aC9sb2dvdXQuanN4IiwgInJvdXRlOi9Vc2Vycy9uYWt1bG5hZ2FyZ2FkZS9Qcm9ncmFtbWluZy9SZW1peC10YWxrLWRlbW8vYXBwL3JvdXRlcy9hdXRoL2xvZ2luLmpzeCIsICJyb3V0ZTovVXNlcnMvbmFrdWxuYWdhcmdhZGUvUHJvZ3JhbW1pbmcvUmVtaXgtdGFsay1kZW1vL2FwcC9yb3V0ZXMvaW5kZXguanN4IiwgInJvdXRlOi9Vc2Vycy9uYWt1bG5hZ2FyZ2FkZS9Qcm9ncmFtbWluZy9SZW1peC10YWxrLWRlbW8vYXBwL3JvdXRlcy9wb3N0cy5qc3giLCAicm91dGU6L1VzZXJzL25ha3VsbmFnYXJnYWRlL1Byb2dyYW1taW5nL1JlbWl4LXRhbGstZGVtby9hcHAvcm91dGVzL3Bvc3RzLyRwb3N0SWQuanN4IiwgIi4uL2FwcC9tb2RlbHMvUG9zdC5qcyIsICJyb3V0ZTovVXNlcnMvbmFrdWxuYWdhcmdhZGUvUHJvZ3JhbW1pbmcvUmVtaXgtdGFsay1kZW1vL2FwcC9yb3V0ZXMvcG9zdHMvaW5kZXguanN4IiwgInJvdXRlOi9Vc2Vycy9uYWt1bG5hZ2FyZ2FkZS9Qcm9ncmFtbWluZy9SZW1peC10YWxrLWRlbW8vYXBwL3JvdXRlcy9wb3N0cy9uZXcuanN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vZXhwcmVzc1wiO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAwO1xuXG4vL0RCIENvbm5lY3Rpb25cbm1vbmdvb3NlLmNvbm5lY3QoIFwibW9uZ29kYitzcnY6Ly9uZXctdXNlcjpuZXdVc2VyQGNsdXN0ZXIwLmRodnVuLm1vbmdvZGIubmV0L215Rmlyc3REYXRhYmFzZT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIiwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsdXNlVW5pZmllZFRvcG9sb2d5IDogdHJ1ZSB9KVxuLnRoZW4oKCkgPT4ge2NvbnNvbGUubG9nKCdNb25nb0RCIGlzIGNvbm5lY3RlZCcpfSlcbi5jYXRjaCgoZXJyKSA9PiB7Y29uc29sZS5sb2coZXJyKX0pXG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL25ha3VsbmFnYXJnYWRlL1Byb2dyYW1taW5nL1JlbWl4LXRhbGstZGVtby9hcHAvZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvbmFrdWxuYWdhcmdhZGUvUHJvZ3JhbW1pbmcvUmVtaXgtdGFsay1kZW1vL2FwcC9yb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbmFrdWxuYWdhcmdhZGUvUHJvZ3JhbW1pbmcvUmVtaXgtdGFsay1kZW1vL2FwcC9yb3V0ZXMvYXV0aC9sb2dvdXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9uYWt1bG5hZ2FyZ2FkZS9Qcm9ncmFtbWluZy9SZW1peC10YWxrLWRlbW8vYXBwL3JvdXRlcy9hdXRoL2xvZ2luLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbmFrdWxuYWdhcmdhZGUvUHJvZ3JhbW1pbmcvUmVtaXgtdGFsay1kZW1vL2FwcC9yb3V0ZXMvaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9uYWt1bG5hZ2FyZ2FkZS9Qcm9ncmFtbWluZy9SZW1peC10YWxrLWRlbW8vYXBwL3JvdXRlcy9wb3N0cy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL25ha3VsbmFnYXJnYWRlL1Byb2dyYW1taW5nL1JlbWl4LXRhbGstZGVtby9hcHAvcm91dGVzL3Bvc3RzLyRwb3N0SWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9uYWt1bG5hZ2FyZ2FkZS9Qcm9ncmFtbWluZy9SZW1peC10YWxrLWRlbW8vYXBwL3JvdXRlcy9wb3N0cy9pbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL25ha3VsbmFnYXJnYWRlL1Byb2dyYW1taW5nL1JlbWl4LXRhbGstZGVtby9hcHAvcm91dGVzL3Bvc3RzL25ldy5qc3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoL2xvZ291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoL2xvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoL2xvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9zdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzLyRwb3N0SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzLyRwb3N0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogXCI6cG9zdElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcG9zdHNcIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0LCBMaXZlUmVsb2FkLCBMaW5rLCBMaW5rcywgTWV0YSwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogZ2xvYmFsU3R5bGVzVXJsIH1dO1xuXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBcIkEgY29vbCBibG9nIGJ1aWx0IHdpdGggUmVtaXhcIjtcbiAgY29uc3Qga2V5d29yZHMgPSBcInJlbWl4LCByZWFjdCwgamF2YXNjcmlwdFwiO1xuXG4gIHJldHVybiB7XG4gICAgZGVzY3JpcHRpb24sXG4gICAga2V5d29yZHMsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpO1xuICBjb25zdCBkYXRhID0ge1xuICAgIHVzZXIsXG4gIH07XG4gIGNvbnNvbGUubG9nKGRhdGEsIFwiZGF0YVwiKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRG9jdW1lbnQoeyBjaGlsZHJlbiwgdGl0bGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIDx0aXRsZT57dGl0bGUgPyB0aXRsZSA6IFwiUmVtaXggQmxvZ1wifTwvdGl0bGU+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IDxMaXZlUmVsb2FkIC8+IDogbnVsbH1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnNvbGUubG9nKHVzZXIsIFwidXNlclwiKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIFJlbWl4XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvcG9zdHNcIj5Qb3N0czwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvYXV0aC9sb2dvdXRcIiBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgIHt1c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2F1dGgvbG9naW5cIj5Mb2dpbjwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9KSB7XG4gIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+RXJyb3I8L2gxPlxuICAgICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuIiwgImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL21vZGVscy9Vc2VyXCI7XG5cbi8vIGltcG9ydCB7IGRiIH0gZnJvbSAnLi9kYi5zZXJ2ZXInXG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuLy8gTG9naW4gdXNlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pIHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XG4gICAgdXNlcm5hbWUsXG4gIH0pO1xuXG4gIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG5cbiAgLy8gQ2hlY2sgcGFzc3dvcmRcbiAgY29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuXG4gIGlmICghaXNDb3JyZWN0UGFzc3dvcmQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB1c2VyO1xufVxuXG4vLyBSZWdpc3RlciBuZXcgdXNlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pIHtcbiAgY29uc3QgcGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgcmV0dXJuIFVzZXIuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkSGFzaCxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gR2V0IHNlc3Npb24gc2VjcmV0XG5jb25zdCBzZXNzaW9uU2VjcmV0ID0gXCJzZWNyZXRcIjtcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZXNzaW9uIHNlY3JldFwiKTtcbn1cblxuLy8gQ3JlYXRlIHNlc3Npb24gc3RvcmFnZVxuY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJyZW1peGJsb2dfc2Vzc2lvblwiLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgIHNlY3JldHM6IFtzZXNzaW9uU2VjcmV0XSxcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDYwLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICB9LFxufSk7XG5cbi8vIENyZWF0ZSB1c2VyIHNlc3Npb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VySWQ6IHN0cmluZywgcmVkaXJlY3RUbzogc3RyaW5nKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgc2Vzc2lvbi5zZXQoXCJ1c2VySWRcIiwgdXNlcklkKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBHZXQgdXNlciBzZXNzaW9uXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICByZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xufVxuXG4vLyBHZXQgbG9nZ2VkIGluIHVzZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKTtcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9IH0pO1xuICAgIHJldHVybiB1c2VyO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIExvZ291dCB1c2VyIGFuZCBkZXN0cm95IHNlc3Npb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xuICByZXR1cm4gcmVkaXJlY3QoXCIvYXV0aC9sb2dvdXRcIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB1c2VybmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICAvLyAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHBhc3N3b3JkSGFzaDogU3RyaW5nLFxuICBjcmVhdGVkQXQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICB9LFxuICB1cGRhdGVkQXQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICB9LFxuICBwb3N0czogW3sgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiUG9zdFwiIH1dLFxufSk7XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBsb2dvdXQocmVxdWVzdClcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KCcvJylcbn1cbiIsICJpbXBvcnQgeyB1c2VBY3Rpb25EYXRhLCByZWRpcmVjdCwganNvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiwgbG9naW4sIHJlZ2lzdGVyIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSkge1xuICBpZiAodHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiIHx8IHVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm4gXCJVc2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVyc1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBiYWRSZXF1ZXN0KGRhdGEpIHtcbiAgcmV0dXJuIGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBsb2dpblR5cGUgPSBmb3JtLmdldChcImxvZ2luVHlwZVwiKTtcbiAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XG5cbiAgY29uc3QgZmllbGRzID0geyBsb2dpblR5cGUsIHVzZXJuYW1lLCBwYXNzd29yZCB9O1xuXG4gIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgIHVzZXJuYW1lOiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lKSxcbiAgICBwYXNzd29yZDogdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCksXG4gIH07XG5cbiAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfSk7XG4gIH1cblxuICBzd2l0Y2ggKGxvZ2luVHlwZSkge1xuICAgIGNhc2UgXCJsb2dpblwiOiB7XG4gICAgICAvLyBGaW5kIHVzZXJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcblxuICAgICAgLy8gQ2hlY2sgdXNlclxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgZmllbGRFcnJvcnM6IHsgdXNlcm5hbWU6IFwiSW52YWxpZCBjcmVkZW50aWFsc1wiIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgU2Vzc2lvblxuICAgICAgLy8gcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIuaWQsIFwiL3Bvc3RzXCIpO1xuICAgIH1cbiAgICBjYXNlIFwicmVnaXN0ZXJcIjoge1xuICAgICAgLy8gQ2hlY2sgaWYgdXNlciBleGlzdHNcbiAgICAgIGNvbnN0IHVzZXJFeGlzdHMgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgIH0pLmV4ZWMoKTtcblxuICAgICAgaWYgKHVzZXJFeGlzdHMpIHtcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICBmaWVsZEVycm9yczogeyB1c2VybmFtZTogYFVzZXIgJHt1c2VybmFtZX0gYWxyZWFkeSBleGlzdHNgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgdXNlclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlZ2lzdGVyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgZm9ybUVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgc2Vzc2lvblxuICAgICAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIuaWQsIFwiL3Bvc3RzXCIpO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgZm9ybUVycm9yOiBcIkxvZ2luIHR5cGUgaXMgaW52YWxpZFwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL3Bvc3RzXCIpO1xufTtcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsZWdlbmQ+TG9naW4gb3IgUmVnaXN0ZXI8L2xlZ2VuZD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibG9naW5UeXBlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAhYWN0aW9uRGF0YT8uZmllbGRzPy5sb2dpblR5cGUgfHxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkcz8ubG9naW5UeXBlID09PSBcImxvZ2luXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJsb2dpblR5cGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwicmVnaXN0ZXJcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXthY3Rpb25EYXRhPy5maWVsZHM/LmxvZ2luVHlwZSA9PT0gXCJyZWdpc3RlclwifVxuICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udXNlcm5hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPlxuICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnVzZXJuYW1lID8gKFxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRpb24tZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWUtZXJyb3JcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhLmZpZWxkRXJyb3JzLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8ucGFzc3dvcmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPlxuICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRpb24tZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtZXJyb3JcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhLmZpZWxkRXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9ja1wiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCAiZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPldlbGNvbWUgdG8gUmVtaXghPC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBSZW1peCBpcyBhIGZ1bGwgc3RhY2sgd2ViIGZyYW1ld29yayBieSB0aGUgY3JlYXRvcnMgb2YgUmVhY3QgUm91dGVyLlxuICAgICAgICBUaGlzIGlzIGEgc2ltcGxlIGJsb2cgYXBwIGZyb20gdGhlIFRyYXZlcnN5IE1lZGlhIFJlbWl4IGNyYXNoIGNvdXJzZS5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBQb3N0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xuXG57XG4gIC8qIDxBcHA+XG4gIDxQb3N0cz5cbiAgICA8UG9zdHNJbmRleCAvPiAoT3V0bGV0KVxuICA8L1Bvc3RzPlxuPC9BcHA+ICovXG59XG4iLCAiaW1wb3J0IHsgTGluaywgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQb3N0U2NoZW1hIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Qb3N0XCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcblxuICBjb25zdCBwb3N0ID0gYXdhaXQgUG9zdFNjaGVtYS5maW5kT25lKHtcbiAgICBpZDogcGFyYW1zLnBvc3RJZCxcbiAgfSk7XG5cbiAgaWYgKCFwb3N0KSB0aHJvdyBuZXcgRXJyb3IoXCJQb3N0IG5vdCBmb3VuZFwiKTtcblxuICBjb25zdCBkYXRhID0geyBwb3N0LCB1c2VyIH07XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGlmIChmb3JtLmdldChcIl9tZXRob2RcIikgPT09IFwiZGVsZXRlXCIpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcblxuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBQb3N0U2NoZW1hLmZpbmRPbmVBbmREZWxldGUoe1xuICAgICAgaWQ6IHBhcmFtcy5wb3N0SWQsXG4gICAgfSk7XG5cbiAgICBpZiAoIXBvc3QpIHRocm93IG5ldyBFcnJvcihcIlBvc3Qgbm90IGZvdW5kXCIpO1xuXG4gICAgLy8gaWYgKHVzZXIgJiYgcG9zdC51c2VySWQgPT09IHVzZXIuaWQpIHtcbiAgICAvLyAgIGF3YWl0IGRiLnBvc3QuZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IHBhcmFtcy5wb3N0SWQgfSB9KTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvcG9zdHNcIik7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFBvc3QoKSB7XG4gIGNvbnN0IHsgcG9zdCwgdXNlciB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgIDxMaW5rIHRvPVwiL3Bvc3RzXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1yZXZlcnNlXCI+XG4gICAgICAgICAgQmFja1xuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj57cG9zdC5ib2R5fTwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZm9vdGVyXCI+XG4gICAgICAgIHt1c2VyLmlkID09PSBwb3N0LnVzZXJJZCAmJiAoXG4gICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX21ldGhvZFwiIHZhbHVlPVwiZGVsZXRlXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWxldGVcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiIsICJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG4vLyBtb2RlbCBQb3N0IHtcbi8vICAgICBpZCAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpXG4vLyAgICAgdXNlcklkICBTdHJpbmdcbi8vICAgICB1c2VyICAgIFVzZXIgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSlcbi8vICAgICB0aXRsZSAgIFN0cmluZ1xuLy8gICAgIGJvZHkgICAgU3RyaW5nXG4vLyAgICAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSlcbi8vICAgICB1cGRhdGVkQXQgRGF0ZVRpbWUgIEB1cGRhdGVkQXRcbi8vICAgfVxuY29uc3QgUG9zdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB1c2VyaWQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gIH0sXG4gIHRpdGxlOiBTdHJpbmcsXG4gIGJvZHk6IFN0cmluZyxcbiAgY3JlYXRlZEF0OiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbiAgfSxcbiAgdXBkYXRlZEF0OiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICAvLyBgRGF0ZS5ub3coKWAgcmV0dXJucyB0aGUgY3VycmVudCB1bml4IHRpbWVzdGFtcCBhcyBhIG51bWJlclxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICB9LFxuICB1c2VyOiB7XG4gICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgIHJlZjogXCJVc2VyXCIsXG4gIH0sXG59KTtcblxuY29uc3QgUG9zdCA9IG1vbmdvb3NlLm1vZGVsKFwiUG9zdFwiLCBQb3N0U2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iLCAiaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4uLy4uL21vZGVscy9Qb3N0XCI7XG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBwb3N0czogYXdhaXQgUG9zdC5maW5kKHtcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICB9KSxcbiAgfTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5mdW5jdGlvbiBQb3N0SXRlbXMoKSB7XG4gIGNvbnN0IHsgcG9zdHMgfSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8aDE+UG9zdHM8L2gxPlxuICAgICAgICA8TGluayB0bz1cIi9wb3N0cy9uZXdcIiBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICBOZXcgUG9zdFxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3N0cy1saXN0XCI+XG4gICAgICAgIHtwb3N0cz8ubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5faWR9PlxuICAgICAgICAgICAgPExpbmsgdG89e3Bvc3QuX2lkfT5cbiAgICAgICAgICAgICAgPGgzPntwb3N0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIHtuZXcgRGF0ZShwb3N0LmNyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RJdGVtcztcbiIsICJpbXBvcnQgeyBMaW5rLCByZWRpcmVjdCwgdXNlQWN0aW9uRGF0YSwganNvbiB9IGZyb20gXCJyZW1peFwiO1xuLy8gaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4uLy4uL21vZGVscy9Qb3N0XCI7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGl0bGUodGl0bGUpIHtcbiAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gXCJzdHJpbmdcIiB8fCB0aXRsZS5sZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuIFwiVGl0bGUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnNcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUJvZHkoYm9keSkge1xuICBpZiAodHlwZW9mIGJvZHkgIT09IFwic3RyaW5nXCIgfHwgYm9keS5sZW5ndGggPCAxMCkge1xuICAgIHJldHVybiBcIkJvZHkgbXVzdCBiZSBhdCBsZWFzdCAxMCBjaGFyYWN0ZXJzXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmFkUmVxdWVzdChkYXRhKSB7XG4gIHJldHVybiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgdGl0bGUgPSBmb3JtLmdldChcInRpdGxlXCIpO1xuICBjb25zdCBib2R5ID0gZm9ybS5nZXQoXCJib2R5XCIpO1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcbiAgY29uc29sZS5sb2codXNlciwgXCJ1c2VyLmlkXCIsIHVzZXIuaWQpO1xuXG4gIGNvbnN0IGZpZWxkcyA9IHsgdGl0bGUsIGJvZHkgfTtcblxuICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICB0aXRsZTogdmFsaWRhdGVUaXRsZSh0aXRsZSksXG4gICAgYm9keTogdmFsaWRhdGVCb2R5KGJvZHkpLFxuICB9O1xuXG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgY29uc29sZS5sb2coZmllbGRFcnJvcnMpO1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcbiAgfVxuICBjb25zdCBwb3N0ID0gYXdhaXQgUG9zdC5jcmVhdGUoeyAuLi5maWVsZHMsIHVzZXJJZDogdXNlci5pZCB9KTtcblxuICByZXR1cm4gcmVkaXJlY3QoYC9wb3N0cy8ke3Bvc3QuaWR9YCk7XG59O1xuXG5mdW5jdGlvbiBOZXdQb3N0KCkge1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxoMT5OZXcgUG9zdDwvaDE+XG4gICAgICAgIDxMaW5rIHRvPVwiL3Bvc3RzXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1yZXZlcnNlXCI+XG4gICAgICAgICAgQmFja1xuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy50aXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+XG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udGl0bGUgPyAoXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tdmFsaWRhdGlvbi1lcnJvclwiXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZS1lcnJvclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZmllbGRFcnJvcnMudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJvZHlcIj5Qb3N0IEJvZHk8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJib2R5XCJcbiAgICAgICAgICAgICAgaWQ9XCJib2R5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LmJvZHl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPlxuICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmJvZHkgPyAoXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tdmFsaWRhdGlvbi1lcnJvclwiXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJib2R5LWVycm9yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5maWVsZEVycm9ycy5ib2R5fVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICBBZGQgUG9zdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3UG9zdDtcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic4NTk3MjM0OScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtVk81WUdDQlkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdaTlVaT1FOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVNTRU9PRkxMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00VzVLTEZYVS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2F1dGgvbG9naW4nOnsnaWQnOidyb3V0ZXMvYXV0aC9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvbG9naW4tRFRQNU40UEUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2F1dGgvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvbG9nb3V0LVBMU0JJNzIyLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTRQUE1IWFdPLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMnOnsnaWQnOidyb3V0ZXMvcG9zdHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncG9zdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMtRVhWWk1XVDcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy8kcG9zdElkJzp7J2lkJzoncm91dGVzL3Bvc3RzLyRwb3N0SWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9wb3N0cycsJ3BhdGgnOic6cG9zdElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzLyRwb3N0SWQtRVhIR1haQ1EuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXNUtMRlhVLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcG9zdHMvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9wb3N0cycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9pbmRleC1ET0ZUQjdCRy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNFc1S0xGWFUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvbmV3Jzp7J2lkJzoncm91dGVzL3Bvc3RzL25ldycsJ3BhcmVudElkJzoncm91dGVzL3Bvc3RzJywncGF0aCc6J25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9uZXctNTJIWEVURkguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXNUtMRlhVLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC04NTk3MjM0OS5q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
