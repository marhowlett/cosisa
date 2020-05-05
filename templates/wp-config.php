<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'diego_cosisa' );

/** MySQL database username */
define( 'DB_USER', 'diego_cosisa' );

/** MySQL database password */
define( 'DB_PASSWORD', 'h5b3DBiyuV' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-nHuci}]U&+QCdlQ;6~oI>4o#;_MP9@DNWa!8D._p;b|s`1?Y8Z>cbXzhD9,#su%' );
define( 'SECURE_AUTH_KEY',  '`doL[WBi}^&,Bd^tbrGQceLK%,oy_{g0^lJj>LSZ6plWq=5B)*T0tk`YAX$HW{7J' );
define( 'LOGGED_IN_KEY',    '2mZ]0-d5$W{>=,n}e#YeSWp07pYNvS`NHma^|0!yQx52ZrzR)I@YsS4mI.a|J].w' );
define( 'NONCE_KEY',        'ymj@wC-=I+DjC$i{^izEqaY)SlPpic*^HfZ@>CX/&QxpWuD`wVGBaxrMyV)-x1T$' );
define( 'AUTH_SALT',        '#JuWQZ?U6e-/x&?0f|-Q,3Fk%8o8[lt^,oSD[b*<Hdx,il7/C4O8;5il/d/DmtCD' );
define( 'SECURE_AUTH_SALT', '[O>4z2[CbEa3pBtQ[q{=&RF@b?Ryp7p(P6E8eArHzM(e-;Xas=gD+txKLgRo)}VV' );
define( 'LOGGED_IN_SALT',   'aON,20J6lEMuG%b<N;W;zaTLSv4bdPmY_))`K]bIa|(WSui0=zKvZtqwxRO@<=vM' );
define( 'NONCE_SALT',       'xbG7|LvR-NpwN(|:icSu{TnreTa<$5bcbqNM7&pKwR)>5M KR.szqb.yYB0  lTG' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'vp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
